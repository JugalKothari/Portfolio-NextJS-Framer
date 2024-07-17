import React from 'react'
import LampWelcome from './Welcome';
import { ModeToggle } from './ModeToggle';

const HeroSection = () => {
  return (
    <div>
        <nav>Hello <ModeToggle/></nav>
        <LampWelcome/>
        
    </div>
  )
}

export default HeroSection
