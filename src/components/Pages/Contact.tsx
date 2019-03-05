import React, { useState } from 'react';
import LayoutsMain from '../Layouts/Main';
import ContactForm from '../Site/ContactForm';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  return (
    <LayoutsMain title="Contact · JMParsons">
      <h2>Contact</h2>
      {sent ? (
        <>
          <h2>Thanks!</h2>
          <p>Your message has been received.</p>
        </>
      ) : (
        <ContactForm setSent={setSent} />
      )}
    </LayoutsMain>
  );
};

export default Contact;
