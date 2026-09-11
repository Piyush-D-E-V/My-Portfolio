'use client'
import React, { useState, useEffect } from 'react'
import NavbarRight from './NavbarItems/NavbarRight'
import NavbarLeft from './NavbarItems/NavbarLeft'

const Navbar = () => {
  // State to track if the navbar should be visible or hidden
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // We use a simple variable inside the effect to track the last scroll position
    // without triggering unnecessary React re-renders.
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we scroll down AND we are past the top 80 pixels of the page, hide it!
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        // If we scroll up (or if we are at the very top), show it!
        setIsVisible(true);
      }

      // Update the tracking variable for the next scroll event
      lastScrollY = currentScrollY;
    };

    // Attach the listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 1. The Dynamic Wrapper
    // Notice the Tailwind template literal at the end that swaps classes based on the `isVisible` state
    <div 
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0 pointer-events-none'
      }`}
    >
      
      {/* 2. The Hollow Glass Shell */}
      <div className='relative w-full flex justify-between items-center bg-white/5 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20 shadow-[inset_0_2px_15px_rgba(255,255,255,0.15),inset_0_-2px_15px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden'>
        
        {/* 3. The Specular Highlights */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* 4. Subtle Ambient Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5E35F2]/5 via-[#EAAEF2]/5 to-[#5E35F2]/5 pointer-events-none"></div>

        {/* 5. The Content Layout */}
        <div className='relative z-10 flex w-full justify-between items-center text-lg'>
          <NavbarRight />
          <NavbarLeft />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar