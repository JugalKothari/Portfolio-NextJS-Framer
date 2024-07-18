import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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

             <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
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
