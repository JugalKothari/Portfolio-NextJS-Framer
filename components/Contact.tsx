import { color } from 'framer-motion';
import React, { useState } from 'react';

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ isSending: false, isSuccess: false, isError: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSending: true, isSuccess: false, isError: false });

    // Simulating form submission
    setTimeout(() => {
      setFormStatus({ isSending: false, isSuccess: true, isError: false });
      setContactName('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 2000);
  };

  return (
    <section id="contact">
      <div className="row section-intro">
          <h3>Contact</h3>
          <h1>I&apos;d Love To Hear From You.</h1>
          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.
          </p>
      </div>
    </section>
  );
});

Contact.displayName = "Contact"

export default Contact;

