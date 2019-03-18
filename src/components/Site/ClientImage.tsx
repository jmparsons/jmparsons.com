import React, { useState } from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import placer from '../../assets/images/placer.png';
import { cdn } from '../../utils/utils';

export interface ClientImageProps {
  name: string;
  image: string;
}

const ClientImage: React.FC<ClientImageProps> = client => {
  const [shown, setShown] = useState(false);
  return (
    <Observer
      onChange={(event: IntersectionObserverEntry) => {
        if (!shown && event.isIntersecting) setShown(true);
      }}
    >
      {shown ? <img src={cdn(client.image)} alt={client.name} /> : <img src={placer} />}
    </Observer>
  );
};

export default ClientImage;
