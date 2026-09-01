import FeaturedProjects from '@/components/FeaturedProjects'
import HeroSection from '@/components/Herosection'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black text-white'>
      <HeroSection/>
      <FeaturedProjects/>
    </div>
  )
}

export default page