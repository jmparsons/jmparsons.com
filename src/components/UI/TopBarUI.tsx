import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { Link, NavLink } from 'react-router-dom';
import { media, Breakpoints } from '../../utils/mq';

const TopBarCon = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.topBar.bg};
`;

const TopBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};
  ${media.desktop`
    width: ${Breakpoints.desktop}px;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL}px;
  `};
`;

const Logo = styled.h1`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 60px;
  margin: 0;
  ${media.tablet`
    justify-content: flex-start;
  `};
`;

const LogoLink = styled(Link)`
  font-size: 36px;
  font-family: 'Denmark';
  text-decoration: none;
  color: ${({ theme }: ThxProps) => theme.topBar.logo};
`;

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-end;
  `};
`;

const NxLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  color: ${({ theme }: ThxProps) => theme.topBar.link};
  &.active {
    font-weight: bold;
  }
  ${media.tablet`
    padding: 0 20px;
  `};
`;

const HomeLink = styled(NxLink)`
  display: none;
  ${media.tablet`
    display: block;
  `};
`;

export { TopBarCon, TopBarGrid, Logo, LogoLink, NavBar, NxLink, HomeLink };
