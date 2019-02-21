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
    width: ${Breakpoints.desktop / 16}em;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
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
  display: grid;
  text-decoration: none;
  align-content: center;
  justify-content: center;
  color: ${({ theme }: ThxProps) => theme.topBar.link};
  font-size: 14px;
  height: 46px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  font-family: 'Open Sans', sans-serif;
  transition: padding 0.2s, border 0.2s, color 0.2s;
  &:hover {
    color: ${({ theme }: ThxProps) => theme.topBar.activeLink};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }: ThxProps) => theme.topBar.activeLink};
    border-bottom: 2px solid #17abf0;
  }
  ${media.tablet`
    width: 84px;
    height: 56px;
  `};
`;

const HomeLink = styled(NxLink)`
  display: none;
  ${media.tablet`
    display: grid;
  `};
`;

export { TopBarCon, TopBarGrid, Logo, LogoLink, NavBar, NxLink, HomeLink };
