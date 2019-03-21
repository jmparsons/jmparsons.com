import React from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layout';

const NotFound: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Not Found" />
    <h1>Not Found</h1>
  </LayoutsMain>
);

export default NotFound;
