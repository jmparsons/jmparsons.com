import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../components/Layout';
import { ThemerContext } from '../utils/contexts';

const Home: React.FC = () => {
  const { theme } = useContext(ThemerContext);
  return (
    <LayoutsMain>
      <Helmet>
        <meta
          name="description"
          content="Professional Scala, Play, Node, React, iOS, and Android Developer."
        />
      </Helmet>
      <h1>Home</h1>
      <p>curr theme: {theme}</p>
      <p>Thanks for stopping by! Making some updates. They will be up shortly.</p>
    </LayoutsMain>
  );
};

export default Home;
