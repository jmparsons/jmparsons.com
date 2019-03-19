import React, { useState, useEffect, useContext } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { webp } from '../../utils';
import { DepsContext } from '../../utils/contexts';

export interface ImageLoaderProps {
  src: string;
  alt: string;
  placer: any;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, placer }) => {
  const { canWebp } = useContext(DepsContext);
  const [shown, setShown] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (shown) {
      const image = new Image();
      image.src = canWebp ? webp(src) : src;
      image.onload = () => {
        setLoaded(image.width > 0 && image.height > 0);
      };
    }
  }, [shown]);
  return (
    <Observer
      onChange={(event: IntersectionObserverEntry) => {
        if (!shown && event.isIntersecting) setShown(true);
      }}
    >
      {shown && loaded ? (
        <picture>
          <source srcSet={webp(src)} type="image/webp" />
          <img src={src} alt={alt} />
        </picture>
      ) : (
        <img src={placer} />
      )}
    </Observer>
  );
};

export default ImageLoader;
