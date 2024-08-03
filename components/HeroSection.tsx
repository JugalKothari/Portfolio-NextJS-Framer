import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Button } from './ui/button';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HeroSectionProps{
  scrollToAbout: () => void;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(({ scrollToAbout }, ref) => {
  const words = [
    { text: "Hello, I'm Jugal Kothari." },
    { text: "I started my journey as a Front-end Developer." },
    { text: "But I didn't stop there." },
    { text: "I delved into Back-end development with Python." },
    { text: "Learned frameworks like FastAPI and Flask." },
    { text: "Along the way, I explored the world of Azure Dev-Ops." },
    { text: "Currently, I am polishing my DSA skills for placements." },
    { text: "When I'm not coding, you can find me drinking coffee." },
    { text: "Welcome to my portfolio!" }
  ];
  
  const socialLinks = {
    github: "https://github.com/JugalKothari",
    linkedin: "https://www.linkedin.com/in/jugal-kothari-b43136249/",
    instagram: "https://www.instagram.com/jugalll?igsh=eThsNno3NjY4NzZv",
    discord: "https://www.discordapp.com/users/472011275954683924"
  };

  return (
    <section id='home' className="w-full flex justify-center">
      <div className='intro-overlay'></div>
      <div className='intro-content'>
        <div className='typewriter-herosection'>
          <TypewriterEffectSmooth className="text-pink-50" words={words} />
        </div>
        <div className='flex flex-col items-center mt-10'>
          <Button 
            className='bg-transparent mt-4 rounded-none h-12 px-8 border-pink-600 border-2 text-md hover:bg-pink-700 hover:text-white'
            onClick={scrollToAbout}
            title=''
          >
            More about me
          </Button>
          <ul className="intro-social flex justify-center mt-4">
            <li><a href={socialLinks.github} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a></li>
            <li><a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href={socialLinks.instagram} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a></li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <li><FontAwesomeIcon icon={faDiscord} /></li>
                </TooltipTrigger>
                <TooltipContent className='bg-black text-white border-none'>
                  <p>jugalalala</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
