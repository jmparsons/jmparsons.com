import React from 'react';

export const ThemerContext = React.createContext({
  theme: '',
  setTheme: (value: string) => {},
});
