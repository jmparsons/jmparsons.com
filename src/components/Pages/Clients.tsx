import React from 'react';
import LayoutsMain from '../Layouts/Main';
import clientData from '../../data/clients.json';
import { ClientGrid, ClientItem } from '../UI/ClientsUI';
import { cdn } from '../../utils/utils';

const Clients: React.FC = () => (
  <LayoutsMain title="Clients · JMParsons">
    <h1>Clients</h1>
    <ClientGrid>
      {clientData.clients.map(client => (
        <ClientItem key={client.name}>
          <img src={cdn(client.image)} alt={client.name} />
        </ClientItem>
      ))}
    </ClientGrid>
  </LayoutsMain>
);

export default Clients;
