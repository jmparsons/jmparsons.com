import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import { ThemeProvider } from 'styled-components';
import Theme from '../../constants/Theme';

type Props = {
  children: React.ReactNode;
};

const LayoutsMain: React.SFC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>('light');
  const currTheme = Theme[theme] || Theme['light'];
  return (
    <ThemeProvider theme={currTheme}>
      <MainGrid>
        <TopBar setTheme={setTheme} />
        <MainContent>{children}</MainContent>
      </MainGrid>
    </ThemeProvider>
  );
};

export default LayoutsMain;
