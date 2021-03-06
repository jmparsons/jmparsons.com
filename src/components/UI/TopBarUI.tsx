import styled from 'styled-components';
import { ThxProps } from '../Theme';
import { media, Breakpoints } from '../../utils/mq';
import { Link } from 'gatsby';

export const TopBarCon = styled.header`
  display: grid;
  position: relative;
  background: ${({ theme }: ThxProps) => theme.topBar.bg};
`;

export const TopBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  ${media.tablet`
    padding: 0 20px;
    grid-template-columns: 1fr auto auto;
  `};
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
  `};
`;

export const LogoCon = styled.span`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 60px;
  margin: 0;
  ${media.tablet`
    justify-content: flex-start;
  `};
`;

export const LogoLink = styled(Link)`
  font-size: 36px;
  font-family: 'Denmark';
  color: ${({ theme }: ThxProps) => theme.topBar.logo};
  &:active {
    padding-top: 1px;
  }
`;

export const TopNavCon = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-end;
  `};
`;

export const TopLink = styled(Link).attrs({ activeClassName: 'active' })`
  display: grid;
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
    color: ${({ theme }: ThxProps) => theme.topBar.activeLink};
    border-bottom: 2px solid ${({ theme }: ThxProps) => theme.topBar.activeBorder};
  }
  ${media.tablet`
    width: 84px;
    height: 56px;
  `};
`;

export const HomeLink = styled(TopLink)`
  display: none;
  ${media.tablet`
    display: grid;
  `};
`;
