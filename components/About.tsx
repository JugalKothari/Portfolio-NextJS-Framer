import React from 'react';
import { Profile } from './Profile';

const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="about" ref={ref}>
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h3 className="font-serif text-3xl mb-2">Let me introduce myself.</h3>
          <div className="intro-info">
            <p className="lead">
              I am a passionate and driven Computer Science Engineering student currently in my final year at PES University.
            </p>
            <Profile />
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
