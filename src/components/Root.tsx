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
      endpoint: 'https://5w0f43j3bf.execute-api.us-east-1.amazonaws.com',
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
