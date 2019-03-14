import React from 'react';
import App from './App';
import API from '@aws-amplify/api';
import Theme from '../constants/Theme';
import GlobalStyle from './GlobalStyle';
import { useLocalStorage } from '../utils/hooks';
import { ThemeProvider } from 'styled-components';
import { ThemerContext } from '../utils/contexts';
import { updateTheme } from '../utils/themer';
import 'normalize.css';
import '../index.css';

const endpoint = 'https://kgcr07khx2.execute-api.us-east-1.amazonaws.com/prod';
const api = { name: 'JMPAPI', endpoint };
API.configure({ endpoints: [api] });

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
