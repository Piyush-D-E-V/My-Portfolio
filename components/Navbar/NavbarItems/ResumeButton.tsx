'use client'
import React from 'react'

const ResumeButton = () => {
  return (
    // target="_blank" opens it in a new tab, so users don't lose your portfolio!
    <a 
      href="/Piyush_Mina_Resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative inline-flex h-12 active:scale-95 transition-transform duration-200 p-[1px] focus:outline-none group"
    >
      <span className="flex justify-center items-center bg-linear-45 from-[#5E35F2]/70 to-[#EAAEF2]/70 p-4 rounded-3xl hover:shadow-[0_0_30px] hover:shadow-[#5E35F2] hover:from-[#5E35F2] hover:to-[#EAAEF2]">
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
    </a>
  )
}

export default ResumeButton;