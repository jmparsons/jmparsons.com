import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ImageLoader from '../components/ImageLoader';
import { IndexSplash, IndexInfo, IndexImage } from '../components/UI/IndexUI';
import { cdn } from '../utils';

const Home: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Professional Scala, Play, Node, React, iOS, and Android Developer."
        />
      </Helmet>
      <IndexSplash>
        <IndexImage>
          <ImageLoader src={cdn('images', 'index-sunset.jpg')} alt="" placer="" />
        </IndexImage>
        <IndexInfo>
          <h2>My name is Jon.</h2>
          <h3>Full Stack Developer</h3>
          <p>New York based professional Scala, Play, Node, React, iOS, and Android Developer.</p>
        </IndexInfo>
      </IndexSplash>
    </Layout>
  );
};

export default Home;
