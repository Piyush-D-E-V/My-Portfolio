'use client'
import React from 'react'

const ResumeButton = () => {
  return (
    <a 
      href="/Piyush_Mina_Frontend_Engineer_Resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative group inline-flex items-center justify-center outline-none"
    >
      {/* 1. The Light Source (Behind the glass) */}
      {/* This sits completely behind the button. Because the button is now transparent, this glow will shine right through the center! */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5E35F2] via-[#a364f2] to-[#EAAEF2] opacity-70 blur-[20px] group-hover:opacity-100 group-hover:blur-[25px] transition-all duration-500 scale-95 group-hover:scale-105"></div>

      {/* 2. The Hollow Glass Shell */}
      <div className="relative flex items-center gap-3 px-8 py-3.5 rounded-full 
        bg-white/5 backdrop-blur-xl border border-white/20 
        shadow-[inset_0_2px_15px_rgba(255,255,255,0.2),inset_0_-2px_15px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.5)] 
        active:scale-95 transition-all duration-300 overflow-hidden"
      >
        
        {/* 3. The Specular Highlights (Sharp glass reflections) */}
        {/* Top curved reflection */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
        {/* Bottom curved reflection */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* 4. Text & Icon Content */}
        {/* Added a strong drop-shadow to the text so it doesn't get lost inside the bright glass */}
        <span className="relative z-10 text-white font-medium tracking-wide text-sm flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">
          Resume
          
          <svg 
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>

      </div>
    </a>
  )
}

export default ResumeButton;