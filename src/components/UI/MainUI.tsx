import styled from 'styled-components';
import { ThxProps } from '../Theme';

const Main = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  color: ${({ theme }: ThxProps) => theme.main.text};
`;

const MainGrid = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
`;

export { Main, MainGrid };
