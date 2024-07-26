import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="contact">
      <div className="row section-intro">
          <h3>Contact</h3>
          <h1>I&apos;d Love To Hear From You.</h1>
      </div>
      <ContactForm />
    </section>
  );
});

Contact.displayName = "Contact"

export default Contact;

