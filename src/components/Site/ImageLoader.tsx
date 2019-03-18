import React, { useState, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export interface ImageLoaderProps {
  source: string;
  alt: string;
  placer: any;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ source, alt, placer }) => {
  const [shown, setShown] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (shown) {
      const image = new Image();
      image.src = source;
      image.onload = () => setLoaded(true);
    }
  }, [shown]);
  return (
    <Observer
      onChange={(event: IntersectionObserverEntry) => {
        if (!shown && event.isIntersecting) setShown(true);
      }}
    >
      {shown && loaded ? <img src={source} alt={alt} /> : <img src={placer} />}
    </Observer>
  );
};

export default ImageLoader;
