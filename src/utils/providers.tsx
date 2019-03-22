import React, { useEffect } from 'react';
import { useLocalStorage } from './hooks';
import { updateTheme } from './themer';
import { ThemerContext, DepsContext } from './contexts';
import { checkWebp } from '.';

const ThemerProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return (
    <ThemerContext.Provider value={{ theme, toggleTheme: updateTheme(theme, setTheme) }}>
      {children}
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
