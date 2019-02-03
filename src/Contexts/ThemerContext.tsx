import React, { useState, useContext } from 'react';
import { useLocalStorage } from '../utils/hooks';

export const ThemerContext = React.createContext({
  theme: 'light',
  toggleTheme: (value: string) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    setTheme;
    console.log('update theme', value);
  },
});
