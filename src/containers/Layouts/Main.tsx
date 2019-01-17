import * as React from 'react';
import { MainGrid, MainContent } from '../../components/UI/MainUI';
import TopBar from '../Site/TopBar';
import { ThemeProvider } from 'styled-components';
import { ThemerProps } from '../../interfaces';

interface DashProps {
  children: React.ReactNode;
}

type Props = ThemerProps & DashProps;

const LayoutsMain: React.SFC<Props> = ({ children, theme, updateTheme }) => (
  <ThemeProvider theme={{ mode: theme }}>
    <MainGrid>
      <TopBar />
      <MainContent>{children}</MainContent>
    </MainGrid>
  </ThemeProvider>
);

export default LayoutsMain;
