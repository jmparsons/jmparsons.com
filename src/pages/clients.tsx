import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import clientData from '../assets/data/clients.json';
import ImageLoader from '../components/ImageLoader';
import clientPlacer from '../assets/images/client-placer.png';
import { ClientGrid, ClientItem } from '../components/UI/ClientsUI';
import { cdn } from '../utils';
import Content from '../components/Content';

const Clients: React.FC = () => (
  <Layout>
    <Helmet title="Clients" />
    <Content>
      <h1>Clients</h1>
      <ClientGrid>
        {clientData.clients.map(client => (
          <ClientItem key={client.name}>
            <ImageLoader
              src={cdn('images', client.image)}
              alt={client.name}
              placer={clientPlacer}
            />
          </ClientItem>
        ))}
      </ClientGrid>
    </Content>
  </Layout>
);

export default Clients;
