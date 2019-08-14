export const getAltTheme = (theme: string) => (theme === 'light' ? 'dark' : 'light');

export const updateTheme = (theme: string, setTheme: any) => () => {
  const newTheme = getAltTheme(theme);
  setTheme(newTheme);
};
