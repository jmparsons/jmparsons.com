import React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';

interface LayoutsMainProps {
  children: React.ReactNode;
}

const LayoutsMain: React.FC<LayoutsMainProps> = ({ children }) => (
  <MainGrid>
    <MainContent>{children}</MainContent>
  </MainGrid>
);

export default LayoutsMain;
