import React from 'react';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { ThemerProvider, DepsProvider } from '../utils/providers';
import 'intersection-observer';
import '../index.css';

const Root: React.FC = () => (
  <ThemerProvider>
    <DepsProvider>
      <GlobalStyle />
      <App />
    </DepsProvider>
  </ThemerProvider>
);

export default Root;
