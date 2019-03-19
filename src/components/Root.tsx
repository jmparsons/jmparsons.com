import React from 'react';
import App from './App';
import Theme from '../constants/Theme';
import GlobalStyle from './GlobalStyle';
import { useLocalStorage } from '../utils/hooks';
import { ThemeProvider } from 'styled-components';
import { ThemerContext } from '../utils/contexts';
import { updateTheme } from '../utils/themer';
import 'intersection-observer';
import '../index.css';

const Root: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return (
    <ThemerContext.Provider value={{ theme, toggleTheme: updateTheme(theme, setTheme) }}>
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
