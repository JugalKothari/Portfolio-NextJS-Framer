import React from 'react';

const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="about" ref={ref}>  
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
          </div>   			
        </div>   		
      </div>
    </section>
  );
});

// Assign a display name to the forwardRef component
About.displayName = 'About';

export default About;
