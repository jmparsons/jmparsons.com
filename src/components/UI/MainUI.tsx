import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';

const MainGrid = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  grid-template-rows: auto 1fr;
  min-height: 100%;
  color: ${({ theme }: ThxProps) => theme.main.text};
`;

const MainContent = styled.div``;

export { MainGrid, MainContent };
