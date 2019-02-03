import React from 'react';
import LayoutsMain from '../Layouts/Main';
import Helmet from 'react-helmet';

const Clients = (props: any) => {
  console.log('props', props);
  return (
    <LayoutsMain>
      <Helmet title="Clients · JMParsons" />
      <h2>Clients</h2>
    </LayoutsMain>
  );
};

export default Clients;
