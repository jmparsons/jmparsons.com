import React from 'react';
import { MainGrid, Main } from './UI/MainUI';
import GlobalStyle from './GlobalStyle';
import Helmet from 'react-helmet';
import TopBar from './TopBar';
import BotBar from './BotBar';
import './layout.css';
import Theme from './Theme';
import { ThemeProvider } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={Theme['dark']}>
    <Main>
      <GlobalStyle />
      <Helmet titleTemplate="%s · JMParsons" defaultTitle="JMParsons" />
      <TopBar />
      <MainGrid>{children}</MainGrid>
      <BotBar />
    </Main>
  </ThemeProvider>
);

export default Layout;
