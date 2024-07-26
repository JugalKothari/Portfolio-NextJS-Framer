import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const HeroSection = ({ scrollToAbout }: { scrollToAbout: () => void }) => {
  
  const socialLinks = {
    github: "https://github.com/JugalKothari",
    linkedin: "https://www.linkedin.com/in/jugal-kothari-b43136249/",
    instagram: "https://www.instagram.com/jugalll?igsh=eThsNno3NjY4NzZv",
    discord: "https://www.discordapp.com/users/472011275954683924"
  };

  return (
    <section id='intro'>
      <div className='intro-overlay'></div>

      <div className='intro-content'>
        <div className='row'>
          <div className='col-twelve'>
            <h5>Hello, World.</h5>
            <h1>I&apos;m Jugal Kothari.</h1>
            <p className="intro-position">
              <span>Front-end Developer</span>
              <span>Back-end python dev</span> <br/>
              <span>Azure Dev-Ops</span>
            </p>

            <Button 
              className='bg-transparent mt-4 rounded-none h-12 px-8 border-pink-600 border-2 text-md hover:bg-pink-700 hover:text-white'
              onClick={scrollToAbout}
              title=''
            >
              More about me
            </Button>
          </div>
        </div>
      </div>

      <ul className="intro-social">        
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
    </section>
  )
}

export default HeroSection;
