import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ThemerContext } from './src/utils/contexts';
import { ThemerProvider } from './src/utils/providers';
import './src/components/layout.css';

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};

const RealRoot = ({ children }) => {
  const [once, setOnce] = useState(false);
  const [twice, setTwice] = useState(false);
  const { theme, toggleTheme } = useContext(ThemerContext);
  const checkTheme = useCallback(() => {
    if (!once && !twice && theme === 'dark') {
      setOnce(true);
      setTwice(true);
    } else {
      if (!once) {
        toggleTheme();
        setOnce(true);
      } else {
        if (!twice) {
          toggleTheme();
          setTwice(true);
        }
      }
    }
  }, [once, twice, theme, toggleTheme]);
  useEffect(() => {
    checkTheme();
  }, [checkTheme]);
  return children;
};

export const wrapRootElement = ({ element }) => (
  <ThemerProvider>
    <RealRoot>{element}</RealRoot>
  </ThemerProvider>
);
