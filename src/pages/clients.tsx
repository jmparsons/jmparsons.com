import React from 'react';
import { Helmet } from 'react-helmet';
import Img, { FluidObject } from 'gatsby-image';
import { Layout } from '../components/Layout';
import { Content } from '../components/Content';
import { graphql } from 'gatsby';
import { ClientGrid, ClientItem } from '../components/UI/ClientsUI';
import { QueryProps } from '../interfaces';

export default ({ data: { allClientsJson: clients } }: QueryProps) => {
  return (
    <Layout>
      <Helmet title="Clients" />
      <Content>
        <h1>Clients</h1>
        <ClientGrid>
          {clients!.edges.map(({ node: client }) => (
            <ClientItem key={client.id}>
              <Img
                fadeIn={false}
                fluid={client.image!.childImageSharp!.fluid as FluidObject}
                title={client.name!}
              />
            </ClientItem>
          ))}
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
