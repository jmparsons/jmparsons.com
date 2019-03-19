import React from 'react';
import LayoutsMain from '../Layouts/Main';
import clientData from '../../data/clients.json';
import ImageLoader from '../Site/ImageLoader';
import clientPlacer from '../../assets/images/clientPlacer.png';
import { ClientGrid, ClientItem } from '../UI/ClientsUI';
import { cdn } from '../../utils';

const Clients: React.FC = () => (
  <LayoutsMain title="Clients · JMParsons">
    <h1>Clients</h1>
    <ClientGrid>
      {clientData.clients.map(client => (
        <ClientItem key={client.name}>
          <ImageLoader src={cdn(client.image)} alt={client.name} placer={clientPlacer} />
        </ClientItem>
      ))}
    </ClientGrid>
  </LayoutsMain>
);

export default Clients;
