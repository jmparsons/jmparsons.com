import React from 'react';
import Helmet from 'react-helmet';
import Img, { FluidObject } from 'gatsby-image';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { graphql } from 'gatsby';
import { ClientGrid, ClientItem } from '../components/UI/ClientsUI';
import { Query } from '../graphql';

const Clients: React.FC<{ data: Query }> = ({ data: { allClientsJson } }) => {
  return (
    <Layout>
      <Helmet title="Clients" />
      <Content>
        <h1>Clients</h1>
        <ClientGrid>
          {allClientsJson &&
            allClientsJson.edges.map(node => {
              const client = node.node;
              const image =
                client.image && client.image.childImageSharp
                  ? client.image.childImageSharp.fluid
                  : null;
              const title = client.name ? client.name : '';
              return (
                <ClientItem key={client.id}>
                  {image ? <Img fadeIn={false} fluid={image as FluidObject} title={title} /> : null}
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
        node {
          id
          name
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;

export default Clients;
