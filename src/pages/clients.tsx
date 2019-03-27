import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ImageLoader from '../components/ImageLoader';
import clientPlacer from '../assets/images/client-placer.png';
import { ClientGrid, ClientItem } from '../components/UI/ClientsUI';
import { cdn } from '../utils';
import Content from '../components/Content';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Clients: React.FC = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Helmet title="Clients" />
      <Content>
        <h1>Clients</h1>
        <ClientGrid>
          {data.allClientsJson.edges.map(({ client }) => {
            console.log(client);
            return (
              <ClientItem key={client.id}>
                <Img fluid={client.image.childImageSharp.small} />
              </ClientItem>
            );
          })}
        </ClientGrid>
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

export default Clients;
