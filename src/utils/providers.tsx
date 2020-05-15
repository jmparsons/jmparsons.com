import React, { ReactNode } from 'react';
import { useLocalStorage } from './hooks';
import { updateTheme } from './themer';
import { ThemerContext } from './contexts';

interface ThemerProviderProps {
  children: ReactNode;
}

export const ThemerProvider = ({ children }: ThemerProviderProps) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return (
    <ThemerContext.Provider
      value={{ theme, toggleTheme: updateTheme(theme, setTheme) }}
    >
      {children}
    </ThemerContext.Provider>
  );
};
