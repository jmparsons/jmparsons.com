import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { ThxProps } from '../../constants/Theme';

const MainGrid = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  grid-template-rows: 60px 1fr;
  min-height: 100%;
`;

const MainContent = styled.div``;

export { MainGrid, MainContent };
