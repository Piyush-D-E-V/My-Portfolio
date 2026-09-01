/* eslint-disable react/no-unknown-property */
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame, ThreeEvent } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[] | Float32Array): void;
  }
  export class MeshLineMaterial extends THREE.Material {
    constructor(parameters?: Record<string, unknown>);
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: { attach?: string; args?: unknown[] } & Partial<MeshLineGeometry>;
      meshLineMaterial: { attach?: string; args?: unknown[] } & Partial<MeshLineMaterial>;
    }
  }
}

const cardGLB = './card.glb';
const lanyard = './lanyard.png';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

// Pre-allocate vectors outside the render loop to prevent garbage collection frame drops
const vec = new THREE.Vector3();
const dir = new THREE.Vector3();
const v1 = new THREE.Vector3();
const v2 = new THREE.Vector3();
const v3 = new THREE.Vector3();
const vFixed = new THREE.Vector3();

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        {/* ADDED 'interpolate' TO FIX PHYSICS JANK */}
        <Physics gravity={gravity} timeStep={1 / 60} interpolate>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

type GLTFResult = {
  nodes: { [name: string]: THREE.Mesh };
  materials: { [name: string]: THREE.Material };
};

function Band({ maxSpeed = 50, minSpeed = 0 }: BandProps) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  const j1Lerped = useRef<THREE.Vector3 | null>(null);
  const j2Lerped = useRef<THREE.Vector3 | null>(null);

  const segmentProps = useMemo(() => ({
    type: 'dynamic' as const,
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  }), []);

  const { nodes, materials } = useGLTF(cardGLB) as unknown as GLTFResult;
  const texture = useTexture(lanyard) as THREE.Texture;

  const [curve] = useState(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3()
    ]);
    c.curveType = 'chordal';
    return c;
  });

  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== 'undefined') return window.innerWidth < 1024;
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.needsUpdate = true;
    }
  }, [texture]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => { document.body.style.cursor = 'auto'; };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      // Safely extract positions (Rapier returns objects, not THREE.Vector3s)
      const t1 = j1.current.translation();
      const t2 = j2.current.translation();
      const t3 = j3.current.translation();
      const tFixed = fixed.current.translation();
      
      v1.set(t1.x, t1.y, t1.z);
      v2.set(t2.x, t2.y, t2.z);
      v3.set(t3.x, t3.y, t3.z);
      vFixed.set(tFixed.x, tFixed.y, tFixed.z);

      if (!j1Lerped.current) j1Lerped.current = new THREE.Vector3().copy(v1);
      if (!j2Lerped.current) j2Lerped.current = new THREE.Vector3().copy(v2);

      // CLAMPED LERP FACTOR TO 1.0 (Fixes explosive reload movement)
      const d1 = Math.max(0.1, Math.min(1, j1Lerped.current.distanceTo(v1)));
      const lerp1 = Math.min(1, delta * (minSpeed + d1 * (maxSpeed - minSpeed)));
      j1Lerped.current.lerp(v1, lerp1);

      const d2 = Math.max(0.1, Math.min(1, j2Lerped.current.distanceTo(v2)));
      const lerp2 = Math.min(1, delta * (minSpeed + d2 * (maxSpeed - minSpeed)));
      j2Lerped.current.lerp(v2, lerp2);

      curve.points[0].copy(v3);
      curve.points[1].copy(j2Lerped.current);
      curve.points[2].copy(j1Lerped.current);
      curve.points[3].copy(vFixed);

      if (band.current) {
        (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32));
      }

      const ang = card.current.angvel();
      const rot = card.current.rotation();
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
    }
  });

  const meshLineGeom = useMemo(() => new MeshLineGeometry(), []);
  const meshLineMat = useMemo(() => {
    return new MeshLineMaterial({
      color: 'white',
      // REMOVED: depthTest: false (Fixes the strap clipping over the card oddly)
      resolution: new THREE.Vector2(isSmall ? 1000 : 1000, isSmall ? 2000 : 1000),
      useMap: true,
      map: texture,
      repeat: new THREE.Vector2(-4, 1),
      lineWidth: 1
    });
  }, [texture, isSmall]);

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).setPointerCapture(e.pointerId);
              if (card.current) {
                const tCard = card.current.translation();
                v3.set(tCard.x, tCard.y, tCard.z);
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(v3)));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={(materials.base as THREE.MeshPhysicalMaterial).map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band} geometry={meshLineGeom} material={meshLineMat} />
    </>
  );
}