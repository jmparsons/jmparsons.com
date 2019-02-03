import React from 'react';
import LayoutsMain from '../Layouts/Main';
import Helmet from 'react-helmet';

const NotFound: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Not Found · JMParsons" />
    <h2>Not Found</h2>
  </LayoutsMain>
);

export default NotFound;
