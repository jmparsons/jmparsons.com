import React from 'react';
import { MainGrid, MainContent, Main } from './UI/MainUI';
import { ThemerProvider, DepsProvider } from '../utils/providers';
import GlobalStyle from './GlobalStyle';
import Helmet from 'react-helmet';
import TopBar from './TopBar';
import BotBar from './BotBar';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemerProvider>
    <Main>
      <GlobalStyle />
      <Helmet titleTemplate="%s · JMParsons" defaultTitle="JMParsons" />
      <TopBar />
      <DepsProvider>
        <MainGrid>
          <MainContent>{children}</MainContent>
        </MainGrid>
      </DepsProvider>
      <BotBar />
    </Main>
  </ThemerProvider>
);

export default Layout;
