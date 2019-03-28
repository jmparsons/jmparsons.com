import React from 'react';
import { useLocalStorage } from './hooks';
import { updateTheme } from './themer';
import { ThemerContext } from './contexts';

const ThemerProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return (
    <ThemerContext.Provider value={{ theme, toggleTheme: updateTheme(theme, setTheme) }}>
      {children}
    </ThemerContext.Provider>
  );
};

export { ThemerProvider };
