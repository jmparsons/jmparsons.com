import React from 'react';
import { MainGrid, MainContent, MainContentGrid } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import BotBar from '../Site/BotBar';

interface Props {
  children: React.ReactNode;
}

const LayoutsMain: React.FC<Props> = ({ children }) => (
  <MainGrid>
    <TopBar />
    <MainContent>
      <MainContentGrid>{children}</MainContentGrid>
    </MainContent>
    <BotBar />
  </MainGrid>
);

export default LayoutsMain;
