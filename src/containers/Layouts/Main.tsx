import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import { ThemeProvider } from 'styled-components';
import Theme from '../../constants/Theme';
import { useLocalStorage } from '../../utils/hooks';

interface Props {
  children: React.ReactNode;
}

const LayoutsMain: React.SFC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <ThemeProvider theme={Theme[theme]}>
      <MainGrid>
        <TopBar setTheme={setTheme} />
        <MainContent>{children}</MainContent>
      </MainGrid>
    </ThemeProvider>
  );
};

export default LayoutsMain;
