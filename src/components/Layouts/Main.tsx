import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';

interface Props {
  children: React.ReactNode;
}

const LayoutsMain: React.FC<Props> = ({ children }) => (
  <MainGrid>
    <TopBar />
    <MainContent>{children}</MainContent>
  </MainGrid>
);

export default LayoutsMain;
