import React from 'react';

const ThemerContext = React.createContext({
  theme: '',
  toggleTheme: () => {},
});

export { ThemerContext };
