import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Tester: React.FC = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Helmet title="Tester" />
      <Content>
        <h1>Tester</h1>
        {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query {
    allClientsJson {
      edges {
        client: node {
          id
          image {
            id
            childImageSharp {
              id
              small: fixed(width: 220, height: 165) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
`;

export default Tester;
