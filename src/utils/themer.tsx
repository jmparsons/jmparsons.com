const getAltTheme = (theme: string) => (theme === 'light' ? 'dark' : 'light');

const updateTheme = (theme: string, setTheme: any) => () => {
  const newTheme = getAltTheme(theme);
  setTheme(newTheme);
};

export { getAltTheme, updateTheme };
