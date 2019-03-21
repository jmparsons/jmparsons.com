import React, { useState } from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactSent from '../components/ContactSent';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  return (
    <LayoutsMain>
      <Helmet title="Contact" />
      <h1>Contact</h1>
      {sent ? <ContactSent /> : <ContactForm setSent={setSent} />}
    </LayoutsMain>
  );
};

export default Contact;
