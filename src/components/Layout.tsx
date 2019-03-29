import React from 'react';
import { MainGrid, Main } from './UI/MainUI';
import GlobalStyle from './GlobalStyle';
import Helmet from 'react-helmet';
import TopBar from './TopBar';
import BotBar from './BotBar';
import Theme from './Theme';
import { ThemeProvider } from 'styled-components';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={Theme}>
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
