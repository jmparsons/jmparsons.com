import React, { useState, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { webp } from '../../utils';
import { DepsContext } from '../../utils/contexts';

export interface ImageLoaderProps {
  src: string;
  alt: string;
  placer: any;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, placer }) => {
  const [shown, setShown] = useState(false);
  const [canWebp, setCanWebp] = useState(false);
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
    <DepsContext.Consumer>
      {({ canWebp }) => (
        <Observer
          onChange={(event: IntersectionObserverEntry) => {
            if (!shown && event.isIntersecting) {
              setCanWebp(canWebp);
              setShown(true);
            }
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
      )}
    </DepsContext.Consumer>
  );
};

export default ImageLoader;
