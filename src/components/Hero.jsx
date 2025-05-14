import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';


const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <BackgroundBeamsWithCollision/>
      <div className='text-white absolute inset-0 flex flex-col justify-center items-center'>
        {/* Introduction */}
        <div></div>
        {/* photo */}
        <div></div>
      </div>
    </div>
  )
}

export default Hero
