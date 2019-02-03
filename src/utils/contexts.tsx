import React from 'react';

const ThemerContext = React.createContext({
  theme: '',
  setTheme: (value: string) => {},
});

export { ThemerContext };
