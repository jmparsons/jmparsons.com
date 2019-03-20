import styled from 'styled-components';
import { ThxProps } from '../Theme';
import { media, Breakpoints } from '../../utils/mq';

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

const MainContent = styled.div`
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
    justify-self: center;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
    justify-self: center;
  `};
`;

export { Main, MainGrid, MainContent };
