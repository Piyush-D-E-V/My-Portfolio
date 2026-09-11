import React from 'react'
import 'remixicon/fonts/remixicon.css'

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      
      {/* GitHub Button */}
      <a 
        href="https://github.com/Piyush-D-E-V"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 group"
      >
        <i className="ri-github-fill text-4xl text-white transition-colors duration-300 group-hover:text-black"></i>
      </a>

      {/* LinkedIn Button */}
      <a 
        href="https://www.linkedin.com/in/piyush-mina"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
      >
        <i className="ri-linkedin-fill text-4xl text-white transition-colors duration-300 group-hover:text-[#2994ff]"></i>
      </a>

    </div>
  )
}

export default SocialLinks