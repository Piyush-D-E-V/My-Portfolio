'use client'

import React, { useEffect, useRef, useState } from 'react'
import OptionWheel from './ui/OptionWheel'
import 'remixicon/fonts/remixicon.css'

const skillsData = [
  {
    name: 'HTML5',
    title: 'HTML',
    desc: 'The structural language that provides and creates the skeleton of modern, accessible websites.',
    icon: 'ri-html5-fill',
    color: '#e34f26',
    tags: ['Structure', 'DOM', 'Accessibility']
  },
  {
    name: 'CSS & Tailwind',
    title: 'Styling',
    desc: 'Crafting pixel-perfect, highly responsive front-end layouts with utility-first CSS architecture.',
    icon: 'ri-css3-fill',
    color: '#38bdf8',
    tags: ['Responsive Design', 'Tailwind', 'Animations']
  },
  {
    name: 'JavaScript',
    title: 'JavaScript',
    desc: 'Powering complex application logic, state management, and dynamic data flow across the client.',
    icon: 'ri-javascript-fill',
    color: '#f7df1e',
    tags: ['ES6+', 'Async/Await', 'DOM Manipulation']
  },
  {
    name: 'TypeScript',
    title: 'TypeScript',
    desc: 'Writing highly scalable, type-safe code to catch errors early and improve developer experience.',
    icon: 'ri-brackets-line',
    color: '#3178c6',
    tags: ['Type Safety', 'Interfaces', 'Generics']
  },
  {
    name: 'React.js',
    title: 'React',
    desc: 'Building cinematic, highly interactive user interfaces and reusable component-driven architectures.',
    icon: 'ri-reactjs-fill',
    color: '#00d8ff',
    tags: ['Hooks', 'State Management', 'SPA']
  },
  {
    name: 'Next.js',
    title: 'Next.js',
    desc: 'Engineering production-grade, SEO-optimized React applications with Server-Side Rendering.',
    icon: 'ri-triangle-fill',
    color: '#ffffff',
    tags: ['SSR', 'App Router', 'Performance']
  },
  {
    name: 'Node & Express',
    title: 'Backend',
    desc: 'Developing robust, scalable server-side logic and secure RESTful API endpoints.',
    icon: 'ri-nodejs-fill',
    color: '#68a063',
    tags: ['Server', 'Routing', 'Middleware']
  },
  {
    name: 'MongoDB',
    title: 'MongoDB',
    desc: 'Designing flexible, scalable NoSQL database schemas for high-performance data storage.',
    icon: 'ri-leaf-fill',
    color: '#4db33d',
    tags: ['NoSQL', 'Database', 'Aggregation']
  },
  {
    name: 'DSA',
    title: 'Algorithms',
    desc: 'Optimizing code execution and memory usage through advanced Data Structures and Algorithms.',
    icon: 'ri-git-merge-line',
    color: '#a855f7',
    tags: ['Optimization', 'Logic', 'Efficiency']
  },
  {
    name: 'System Design',
    title: 'Architecture',
    desc: 'Architecting high-level, scalable, and fault-tolerant infrastructure for massive web applications.',
    icon: 'ri-server-line',
    color: '#f43f5e',
    tags: ['Scalability', 'Load Balancing', 'Microservices']
  },
  {
    name: 'Problem Solving',
    title: 'Debugging',
    desc: 'Executing strategic troubleshooting, bug-tracking, and logical resolution across the full stack.',
    icon: 'ri-bug-line',
    color: '#eab308',
    tags: ['Analytical', 'Testing', 'Resolution']
  },
  
]

const wheelItems = skillsData.map((skill) => skill.name)

const SkillSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const [isSectionCentered, setIsSectionCentered] = useState(false)

  useEffect(() => {
    const checkSectionPosition = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const sectionCenter = rect.top + rect.height / 2
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter)
      const activationZone = window.innerHeight * 0.15

      setIsSectionCentered(distanceFromCenter <= activationZone)
    }

    checkSectionPosition()
    window.addEventListener('scroll', checkSectionPosition, { passive: true })
    window.addEventListener('resize', checkSectionPosition)

    return () => {
      window.removeEventListener('scroll', checkSectionPosition)
      window.removeEventListener('resize', checkSectionPosition)
    }
  }, [])

  const activeSkill = skillsData[activeIndex]
  const formattedIndex = (activeIndex + 1).toString().padStart(2, '0')

  return (
    <div className='relative'>
      <h1 className='absolute top-15 text-6xl z-50 font-bold left-15'>Skills</h1>
    <div
      ref={sectionRef}
      // 1. Replaced h-150 with h-screen min-h-[700px]
      // 2. Added the magical mask-image class to feather the top and bottom edges 
      className="w-full h-screen min-h-[700px] bg-[#050505] flex items-center justify-between overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      {/* Subtle Top & Bottom Gradient Vignettes to deepen the shadows near the cuts */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute top-1/2 right-[15%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-colors duration-1000 ease-in-out"
        style={{
          backgroundColor: activeSkill.color
        }}
      />

      {/* LEFT SIDE: The Option Wheel */}
      <div className="w-1/2 h-full flex items-center relative z-10 flex-wrap">
        <OptionWheel
          items={wheelItems}
          defaultSelected={0}
          textColor="#444444"
          activeColor="#ffffff"
          side="left"
          fontSize={4.5}
          spacing={1.5}
          curve={1.2}
          tilt={7}
          blur={3}
          fade={0.2}
          smoothing={250}
          inset={80}
          loop={false}
          draggable
          soundUrl="/assets/sounds/click-soft.mp3"
          soundVolume={0.5}
          onChange={(index) => setActiveIndex(index)}
        />
      </div>

      {/* RIGHT SIDE: Dynamic Detail View */}
      <div className="w-1/2 h-full flex flex-col justify-center items-end pr-24 xl:pr-40 relative z-10">
        <div
          key={activeIndex}
          className="flex flex-col items-end animate-[slideFadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        >
          {/* Glassmorphism Logo Box */}
          <div
            className="relative flex items-center justify-center px-16 py-14 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8 overflow-hidden group border border-white/10 backdrop-blur-md"
            style={{
              background: `linear-gradient(135deg, ${activeSkill.color}20 0%, rgba(0,0,0,0.8) 100%)`
            }}
          >
            <span
              className="absolute top-5 right-6 text-sm font-black tracking-widest opacity-30"
              style={{
                color: activeSkill.color
              }}
            >
              N° {formattedIndex}
            </span>

            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl z-10 flex items-center gap-5">
              <i
                className={`${activeSkill.icon} text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                style={{
                  color: activeSkill.color
                }}
              />
              {activeSkill.title}
            </h1>
          </div>

          <div className="w-[480px] text-right">
            <h2
              className="text-xl font-bold mb-4 uppercase tracking-[0.2em]"
              style={{
                color: activeSkill.color
              }}
            >
              {activeSkill.name}
            </h2>

            <p className="text-neutral-400 text-xl font-light leading-relaxed tracking-wide mb-6">
              {activeSkill.desc}
            </p>

            <div className="flex flex-wrap justify-end gap-2 mt-2">
              {activeSkill.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-white bg-white/5 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
    </div>
  )
}

export default SkillSection