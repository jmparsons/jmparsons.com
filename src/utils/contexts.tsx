import React from 'react';

export interface ThemerContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemerContext = React.createContext<ThemerContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export { ThemerContext };
