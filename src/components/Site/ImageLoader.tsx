import React, { useState, useEffect, useContext } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { webp } from '../../utils';
import { DepsContext } from '../../utils/contexts';

export interface ImageLoaderProps {
  src: string;
  alt: string;
  placer: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, placer }) => {
  const { canWebp } = useContext(DepsContext);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (visible) {
      const image = new Image();
      image.src = canWebp ? webp(src) : src;
      image.onload = () => setLoaded(true);
    }
  }, [visible]);
  return (
    <Observer
      onChange={(event: IntersectionObserverEntry) => {
        if (!visible && event.isIntersecting) setVisible(true);
      }}
    >
      {visible && loaded ? (
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
