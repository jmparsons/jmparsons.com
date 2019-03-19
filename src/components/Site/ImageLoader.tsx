import React, { useState, useEffect } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { webp, checkWebp } from '../../utils';

export interface ImageLoaderProps {
  src: string;
  alt: string;
  placer: any;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, placer }) => {
  const [shown, setShown] = useState(false);
  const [tryWebp, setTryWebp] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const check = async () => {
      console.log('can webp', await checkWebp());
      if (shown) {
        const imgSource = tryWebp ? src : webp(src);
        const image = new Image();
        image.src = imgSource;
        image.onload = () => {
          setLoaded(image.width > 0 && image.height > 0);
        };
        image.onerror = () => {
          if (!tryWebp) setTryWebp(true);
        };
      }
    };
    check();
  }, [shown, tryWebp]);
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
