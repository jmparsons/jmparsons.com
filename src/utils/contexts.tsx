import { createContext } from 'react';

export interface ThemerContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemerContext = createContext<ThemerContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});
