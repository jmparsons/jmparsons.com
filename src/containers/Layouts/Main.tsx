import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import { ThemeProvider } from 'styled-components';
import Theme from '../../constants/Theme';
import { useLocalStorage } from '../../utils/hooks';
import Helmet from 'react-helmet';

type Props = {
  children: React.ReactNode;
};

const LayoutsMain: React.SFC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <ThemeProvider theme={Theme[theme]}>
      <>
        <Helmet>
          <title>JMParsons</title>
        </Helmet>
        <MainGrid>
          <TopBar setTheme={setTheme} />
          <MainContent>{children}</MainContent>
        </MainGrid>
      </>
    </ThemeProvider>
  );
};

export default LayoutsMain;
