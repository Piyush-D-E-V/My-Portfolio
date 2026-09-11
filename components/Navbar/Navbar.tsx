import React from 'react'
import NavbarRight from './NavbarItems/NavbarRight'
import NavbarLeft from './NavbarItems/NavbarLeft'

const Navbar = () => {
  return (
    <div className='flex justify-self-center max-w-300 w-full text-2xl bg-white/15 backdrop-blur-2xl px-2 py-2 mt-2 rounded-xl z-30 border-purple-400/30 border-l border-b'>
      <div className='flex w-full justify-between items-center'>
          <NavbarRight/>
        <NavbarLeft/>
      </div>
      
    </div>
  )
}

export default Navbar