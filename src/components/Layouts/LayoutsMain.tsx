import React from 'react';
import { MainGrid, MainContent, Main } from '../UI/MainUI';
import { ThemerProvider, DepsProvider } from '../../utils/providers';
import GlobalStyle from '../GlobalStyle';
import Helmet from 'react-helmet';
import TopBar from '../Site/TopBar';
import BotBar from '../Site/BotBar';
import 'intersection-observer';
import './layout.css';

interface LayoutsMainProps {
  children: React.ReactNode;
}

const LayoutsMain: React.FC<LayoutsMainProps> = ({ children }) => (
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

export default LayoutsMain;
