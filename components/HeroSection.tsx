import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Button } from './ui/button';

const HeroSection = () => {
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

            <Button className='bg-transparent mt-4 rounded-none h-12 px-8
             border-pink-600 border-2 text-md hover:bg-pink-700 hover:text-white'
              title=''>More about me</Button>
          </div>
        </div>
      </div>

      <ul className="intro-social">        
         <li> <FontAwesomeIcon icon={faGithubSquare} /></li>
         <li> <FontAwesomeIcon icon={faLinkedinIn} /></li>
         <li> <FontAwesomeIcon icon={faInstagram} /></li>
         <li> <FontAwesomeIcon icon={faDiscord} /></li>
      </ul> 
    </section>
  )
}

export default HeroSection
