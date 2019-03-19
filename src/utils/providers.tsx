import React from 'react';
import Theme from '../constants/Theme';
import { useLocalStorage } from './hooks';
import { ThemeProvider } from 'styled-components';
import { updateTheme } from './themer';
import { ThemerContext } from './contexts';

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

export { ThemerProvider };
