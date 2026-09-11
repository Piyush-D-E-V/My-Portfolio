import Image from 'next/image'
import React from 'react'

const NavbarRight = () => {
  return (
    <div className='relative flex items-center'>
      <Image
        src="/images/tag2.png"
        alt='logo'
        width={75}
        height={75}
        className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
      />
      
      {/* 
        1. bg-gradient-to-r: Creates the color fade.
        2. text-transparent & bg-clip-text: Paints the text with the gradient.
        3. drop-shadow-[...]: Creates the physical glowing aura around the letters! 
      */}
      <div className='absolute left-16 font-semibold text-2xl tracking-wide'>
        <p className="bg-gradient-to-r from-[#5E35F2] via-[#a364f2] to-[#EAAEF2] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(163,100,242,0.6)]">
          iyush
        </p>
      </div>
    </div>
  )
}

export default NavbarRight