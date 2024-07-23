import React from 'react';
import { Profile } from './Profile';

const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="about" ref={ref}>
      <div className="row section-intro">
        <div className="col-twelve">
          <h3>About</h3>
          <h5 className="font-serif text-3xl mb-2">Let me introduce myself.</h5>
          <div className="intro-info">
            <p>
              I am a passionate and driven Computer Science Engineering student currently in my final year at PES University.
            </p>
          </div>
          <Profile />
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
