import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactSent from '../components/ContactSent';
import Content from '../components/Content';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <Helmet title="Contact" />
      <Content>
        <h1>Contact</h1>
        {sent ? <ContactSent /> : <ContactForm setSent={setSent} />}
      </Content>
    </Layout>
  );
};

export default Contact;
