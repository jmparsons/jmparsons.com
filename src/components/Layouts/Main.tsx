import React from 'react';
import { Helmet } from 'react-helmet';
import { MainGrid, MainContent, MainContentGrid } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import BotBar from '../Site/BotBar';

interface Props {
  title: string;
  children: React.ReactNode;
}

const LayoutsMain: React.FC<Props> = ({ title, children }) => (
  <MainGrid>
    <Helmet title={title} />
    <TopBar />
    <MainContent>
      <MainContentGrid>{children}</MainContentGrid>
    </MainContent>
    <BotBar />
  </MainGrid>
);

export default LayoutsMain;
