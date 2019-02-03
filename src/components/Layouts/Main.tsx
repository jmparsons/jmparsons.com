import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import { ThemeProvider } from 'styled-components';
import Theme from '../../constants/Theme';
import { useLocalStorage } from '../../utils/hooks';

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
