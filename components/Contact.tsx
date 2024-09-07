import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="contact">
      <div className="row section-intro">
          <h3>Contact</h3>
          <h1>I&apos;d Love To Hear From You.</h1>
          <h5>Feel free to ping me on social media if I go MIA - don&apos;t let me ghost you!😉</h5>
      </div>
      <ContactForm />
    </section>
  );
});

Contact.displayName = "Contact"

export default Contact;

