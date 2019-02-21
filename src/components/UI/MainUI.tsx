import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { media, Breakpoints } from '../../utils/mq';

const MainGrid = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  grid-template-rows: auto 1fr;
  min-height: 100%;
  color: ${({ theme }: ThxProps) => theme.main.text};
`;

const MainContentGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

const MainContent = styled.div`
  ${media.desktop`
    width: ${Breakpoints.desktop}px;
    justify-self: center;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL}px;
    justify-self: center;
  `};
`;

export { MainGrid, MainContent, MainContentGrid };
