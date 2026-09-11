import React from 'react'
import ResumeButton from './ResumeButton'
import ContactButton from './ContactButton'

const NavbarLeft = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      <ResumeButton/>
      <ContactButton/>
    </div>
  )
}

export default NavbarLeft