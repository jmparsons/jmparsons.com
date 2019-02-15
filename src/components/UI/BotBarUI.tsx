import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { NavLink } from 'react-router-dom';
import { media, Breakpoints } from '../../utils/mq';

const BotBarCon = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.botBar.bg};
`;

const BotBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  ${media.desktop`
    width: ${Breakpoints.desktop}px;
    grid-template-columns: 1fr 1fr 50px;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL}px;
  `};
`;

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.desktop`
    height: 60px;
    justify-content: flex-end;
  `};
`;

const NxLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  color: ${({ theme }: ThxProps) => theme.botBar.link};
  &.active {
    font-weight: bold;
  }
  ${media.desktop`
    padding: 0 20px;
  `};
`;

const HomeLink = styled(NxLink)`
  display: none;
  ${media.desktop`
    display: block;
  `};
`;

export { BotBarCon, BotBarGrid, NavBar, NxLink, HomeLink };
