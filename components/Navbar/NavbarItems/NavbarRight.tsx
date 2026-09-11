import Image from 'next/image'
import React from 'react'

const NavbarRight = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image
      src="/images/tag2.png"
      alt='logo'
      width={75}
      height={75}
      />
      <div className='absolute left-18 -bg-linear-45 from-[#5E35F2] to-[#EAAEF2] text-transparent bg-clip-text font-semibold'>
        <p>iyush</p>
      </div>
    </div>
  )
}

export default NavbarRight