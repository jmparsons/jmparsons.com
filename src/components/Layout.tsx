import React from 'react';
import { MainGrid, MainContent, Main } from './UI/MainUI';
import { ThemerProvider, DepsProvider } from '../utils/providers';
import GlobalStyle from './GlobalStyle';
import Helmet from 'react-helmet';
import TopBar from './TopBar';
import BotBar from './BotBar';
import './layout.css';
import Theme from './Theme';
import { ThemeProvider } from 'styled-components';
import { ThemerContext } from '../utils/contexts';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemerProvider>
    <ThemerContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={Theme[theme]}>
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
        </ThemeProvider>
      )}
    </ThemerContext.Consumer>
  </ThemerProvider>
);

export default Layout;
