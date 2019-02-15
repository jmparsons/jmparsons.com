const updateTheme = (theme: string, setTheme: any) => () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

export { updateTheme };
