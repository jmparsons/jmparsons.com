import styled from 'styled-components';
import { ThxProps } from '../Theme';
import { media, Breakpoints } from '../../utils/mq';
import { Link } from 'gatsby';

export const BotBarCon = styled.footer`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.botBar.bg};
`;

export const BotBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  ${media.tablet`
    padding: 0 20px;
    grid-template-columns: auto 1fr;
  `};
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
  `};
`;

export const BotNavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-start;
  `};
`;

export const SocialBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-start;
  `};
`;

export const BotLink = styled(Link).attrs({ activeClassName: 'active' })`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }: ThxProps) => theme.botBar.link};
  align-self: center;
  justify-self: center;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }: ThxProps) => theme.botBar.activeLink};
  }
  &.active {
    color: ${({ theme }: ThxProps) => theme.botBar.activeLink};
  }
  ${media.tablet`
    margin-right: 20px;
  `};
`;

export const CopyRight = styled.div`
  display: grid;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  height: 50px;
  justify-content: center;
  align-content: center;
  ${media.tablet`
    height: 60px;
    justify-content: flex-end;
  `};
`;
