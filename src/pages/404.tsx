import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content from '../components/Content';

const NotFound: React.FC = () => (
  <Layout>
    <Helmet title="Not Found" />
    <Content>
      <h1>Not Found</h1>
    </Content>
  </Layout>
);

export default NotFound;
