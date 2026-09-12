"use client";
import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode | any }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05,             // Decreased from 0.08. This adds more friction and weight to the glide.
      wheelMultiplier: 0.6,   // Added this. It reduces the physical distance the page jumps per mouse wheel click.
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  );
}