import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout';
import { Content } from '../components/Content';

export default () => (
  <Layout>
    <Helmet title="Not Found" />
    <Content>
      <h1>Not Found</h1>
    </Content>
  </Layout>
);
