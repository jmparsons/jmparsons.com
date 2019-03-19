import React from 'react';

export interface ThemerContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemerContext = React.createContext<ThemerContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

const DepsContext = React.createContext({
  canWebp: false,
});

export { ThemerContext, DepsContext };
