import styled from 'styled-components';
import { ThxProps } from '../Theme';

const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  color: ${({ theme }: ThxProps) => theme.main.text};
`;

const MainGrid = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
`;

export { Main, MainGrid };
