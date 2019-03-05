import React from 'react';
import App from './App';
import { useLocalStorage } from '../utils/hooks';
import { ThemeProvider } from 'styled-components';
import Theme from '../constants/Theme';
import GlobalStyle from './GlobalStyle';
import { ThemerContext } from '../utils/contexts';
import { updateTheme } from '../utils/themer';
import API from '@aws-amplify/api';
import '../index.css';

API.configure({
  endpoints: [
    {
      name: 'JMPAPI',
      endpoint: 'https://kgcr07khx2.execute-api.us-east-1.amazonaws.com/prod',
    },
  ],
});

const Root: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
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
