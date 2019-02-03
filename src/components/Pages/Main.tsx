import React from 'react';
import LayoutsMain from '../Layouts/Main';
import Helmet from 'react-helmet';

const Main: React.FC = () => (
  <LayoutsMain>
    <Helmet title="JMParsons" />
    <h2>Main</h2>
  </LayoutsMain>
);

export default Main;
