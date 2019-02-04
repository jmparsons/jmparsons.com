import React from 'react';
import App from './App';
import { useLocalStorage } from '../utils/hooks';
import { ThemeProvider } from 'styled-components';
import Theme from '../constants/Theme';
import GlobalStyle from './GlobalStyle';
import { ThemerContext } from '../utils/contexts';

const Root: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
  return (
    <ThemerContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={Theme[theme]}>
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </ThemerContext.Provider>
  );
};

export default Root;
