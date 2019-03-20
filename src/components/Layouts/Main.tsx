import React from 'react';
import TopBar from '../Site/TopBar';
import BotBar from '../Site/BotBar';
import { Helmet } from 'react-helmet';
import { MainGrid, MainContent, MainContentGrid } from '../../components/UI/MainUI';
import { DepsProvider } from '../../utils/providers';

interface Props {
  children: React.ReactNode;
}

const LayoutsMain: React.FC<Props> = ({ children }) => (
  <MainGrid>
    <Helmet titleTemplate="%s · JMParsons" defaultTitle="JMParsons" />
    <TopBar />
    <MainContentGrid>
      <MainContent>
        <DepsProvider>{children}</DepsProvider>
      </MainContent>
    </MainContentGrid>
    <BotBar />
  </MainGrid>
);

export default LayoutsMain;
