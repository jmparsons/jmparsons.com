import React from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layout';

const Home: React.FC = () => (
  <LayoutsMain>
    <Helmet>
      <meta
        name="description"
        content="Professional Scala, Play, Node, React, iOS, and Android Developer."
      />
    </Helmet>
    <h1>Home</h1>
    <p>Thanks for stopping by! Making some updates. They will be up shortly.</p>
  </LayoutsMain>
);

export default Home;
