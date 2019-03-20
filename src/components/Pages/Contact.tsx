import React, { useState } from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../Layouts/Main';
import ContactForm from '../Site/ContactForm';
import ContactSent from '../Site/ContactSent';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  return (
    <LayoutsMain>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>Contact</h1>
      {sent ? <ContactSent /> : <ContactForm setSent={setSent} />}
    </LayoutsMain>
  );
};

export default Contact;
