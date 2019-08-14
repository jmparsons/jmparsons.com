import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { MainGrid, Main } from './UI/MainUI';
import { GlobalStyle } from './GlobalStyle';
import { TopBar } from './TopBar';
import { BotBar } from './BotBar';
import { Theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { ThemerContext } from '../utils/contexts';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemerContext);
  return (
    <ThemeProvider theme={Theme[theme]}>
      <Main>
        <GlobalStyle />
        <Helmet titleTemplate="%s · JMParsons" defaultTitle="JMParsons" />
        <TopBar />
        <MainGrid>{children}</MainGrid>
        <BotBar />
      </Main>
    </ThemeProvider>
  );
};
