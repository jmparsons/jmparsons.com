import React from 'react';
import TopBar from '../Site/TopBar';
import BotBar from '../Site/BotBar';
import { Helmet } from 'react-helmet';
import { MainGrid, MainContent, MainContentGrid } from '../../components/UI/MainUI';

interface Props {
  title: string;
  children: React.ReactNode;
}

const LayoutsMain: React.FC<Props> = ({ title, children }) => (
  <MainGrid>
    <Helmet title={title} />
    <TopBar />
    <MainContentGrid>
      <MainContent>{children}</MainContent>
    </MainContentGrid>
    <BotBar />
  </MainGrid>
);

export default LayoutsMain;
