import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from '../components/Layout';
import { IndexSplash, IndexInfo, IndexIntro, IndexList, IndexItem } from '../components/UI/IndexUI';

export default () => (
  <Layout>
    <Helmet>
      <meta
        name="description"
        content="Professional Scala, Play, Node, React, iOS, and Android Developer."
      />
    </Helmet>
    <IndexSplash>
      <IndexInfo>
        <IndexIntro>
          <h2>My name is Jon.</h2>
          <h3>Full Stack Developer</h3>
          <p>New York based professional Scala, Play, Node, React, iOS, and Android Developer.</p>
        </IndexIntro>
        <IndexList>
          <IndexItem>websites</IndexItem>
          <IndexItem>mobile apps</IndexItem>
          <IndexItem>desktop apps</IndexItem>
          <IndexItem>video games</IndexItem>
          <IndexItem>blockchain</IndexItem>
        </IndexList>
      </IndexInfo>
    </IndexSplash>
  </Layout>
);
