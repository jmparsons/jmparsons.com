import React from 'react';
import App from './App';
import GlobalStyle from './GlobalStyle';
import 'intersection-observer';
import '../index.css';
import { ThemerProvider } from '../utils/providers';

const Root: React.FC = () => (
  <ThemerProvider>
    <GlobalStyle />
    <App />
  </ThemerProvider>
);

export default Root;
