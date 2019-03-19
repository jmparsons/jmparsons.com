import React from 'react';
import App from './App';
import GlobalStyle from './GlobalStyle';
import 'intersection-observer';
import '../index.css';
import { ThemerProvider, DepsProvider } from '../utils/providers';

const Root: React.FC = () => (
  <ThemerProvider>
    <DepsProvider>
      <GlobalStyle />
      <App />
    </DepsProvider>
  </ThemerProvider>
);

export default Root;
