import React from 'react';
import LayoutsMain from '../Layouts/Main';
import clientData from '../../data/clients.json';
import ClientImage from '../Site/ClientImage';
import { ClientGrid, ClientItem } from '../UI/ClientsUI';

const Clients: React.FC = () => (
  <LayoutsMain title="Clients · JMParsons">
    <h1>Clients</h1>
    <ClientGrid>
      {clientData.clients.map(client => (
        <ClientItem key={client.name}>
          <ClientImage name={client.name} image={client.image} />
        </ClientItem>
      ))}
    </ClientGrid>
  </LayoutsMain>
);

export default Clients;
