import React from 'react';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { ThemerProvider } from '../utils/providers';
import 'intersection-observer';
import '../index.css';

const Root: React.FC = () => (
  <ThemerProvider>
    <GlobalStyle />
    <App />
  </ThemerProvider>
);

export default Root;
