import React from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layouts/Main';

const Home: React.FC = () => (
  <LayoutsMain>
    <Helmet>
      <meta
        name="description"
        content="Professional Scala, Play, Node, React, iOS, and Android Developer."
      />
    </Helmet>
    <h1>Home</h1>
  </LayoutsMain>
);

export default Home;
