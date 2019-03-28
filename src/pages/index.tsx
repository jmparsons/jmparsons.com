import React from 'react';
import Helmet from 'react-helmet';
import Img, { FluidObject } from 'gatsby-image';
import Layout from '../components/Layout';
import { IndexSplash, IndexInfo, IndexImage, IndexIntro } from '../components/UI/IndexUI';
import { QueryProps } from '../interfaces';
import { graphql } from 'gatsby';
import Content from '../components/Content';

const Home: React.FC<QueryProps> = ({ data }) => {
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
          <Img fluid={data.file!.childImageSharp!.fluid as FluidObject} critical fadeIn={false} />
        </IndexImage>
        <IndexInfo>
          <IndexIntro>
            <h2>My name is Jon.</h2>
            <h3>Full Stack Developer</h3>
            <p>New York based professional Scala, Play, Node, React, iOS, and Android Developer.</p>
          </IndexIntro>
        </IndexInfo>
      </IndexSplash>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "index-sunset.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2816) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default Home;
