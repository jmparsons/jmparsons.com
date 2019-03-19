import React, { useState, useEffect } from 'react';
import Theme from '../constants/Theme';
import { useLocalStorage } from './hooks';
import { ThemeProvider } from 'styled-components';
import { updateTheme } from './themer';
import { ThemerContext, DepsContext } from './contexts';
import { checkWebp } from '.';

const ThemerProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return (
    <ThemerContext.Provider value={{ theme, toggleTheme: updateTheme(theme, setTheme) }}>
      <ThemeProvider theme={Theme[theme]}>
        <>{children}</>
      </ThemeProvider>
    </ThemerContext.Provider>
  );
};

const DepsProvider: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [canWebp, setCanWebp] = useState(false);
  useEffect(() => {
    const checkDeps = async () => {
      const value = await checkWebp();
      setCanWebp(value);
      setLoaded(true);
    };
    checkDeps();
  }, [canWebp]);
  return (
    <DepsContext.Provider value={{ canWebp }}>{loaded ? children : null}</DepsContext.Provider>
  );
};

export { ThemerProvider, DepsProvider };
