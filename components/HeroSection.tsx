import React from 'react'
import { Vortex } from './ui/vortex'

const HeroSection = () => {
  return (
    <div>
        <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
        <h2>Welcome babes</h2>
        </Vortex>
    </div>
  )
}

export default HeroSection
