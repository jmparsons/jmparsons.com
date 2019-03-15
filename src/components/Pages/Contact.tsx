import React, { useState } from 'react';
import LayoutsMain from '../Layouts/Main';
import ContactForm from '../Site/ContactForm';
import ContactSent from '../Site/ContactSent';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  return (
    <LayoutsMain title="Contact · JMParsons">
      <h1>Contact</h1>
      {sent ? <ContactSent /> : <ContactForm setSent={setSent} />}
    </LayoutsMain>
  );
};

export default Contact;
