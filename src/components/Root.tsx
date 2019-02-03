import * as React from 'react';
import App from './App';
import { useLocalStorage } from '../utils/hooks';
import { ThemeProvider } from 'styled-components';
import Theme from '../constants/Theme';
import GlobalStyle from './GlobalStyle';
import { ThemerContext } from '../Contexts/ThemerContext';

const Root: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <ThemerContext.Provider value={{ theme, setTheme }}>
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
