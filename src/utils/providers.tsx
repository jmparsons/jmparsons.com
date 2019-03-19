import React, { useState, useEffect } from 'react';
import Theme from '../components/Theme';
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
  const [deps, setDeps] = useLocalStorage('deps', false);
  const [canWebp, setCanWebp] = useLocalStorage('canWebp', false);
  useEffect(() => {
    const checkDeps = async () => {
      const value = await checkWebp();
      setCanWebp(value);
      setDeps(true);
    };
    if (!deps) checkDeps();
  }, [deps]);
  return <DepsContext.Provider value={{ canWebp }}>{deps ? children : null}</DepsContext.Provider>;
};

export { ThemerProvider, DepsProvider };
