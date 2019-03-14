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
  box-sizing: border-box;
  ${media.tablet`
    padding: 0 20px;
    grid-template-columns: auto auto 1fr;
  `};
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
  `};
`;

const BotNavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-start;
  `};
`;

const SocialBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  height: 50px;
  border-top: 1px solid ${({ theme }: ThxProps) => theme.main.bg};
  ${media.tablet`
    border-top: 0;
    height: 60px;
    justify-content: flex-start;
  `};
`;

const BotLink = styled(NavLink)`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }: ThxProps) => theme.botBar.link};
  text-decoration: none;
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

const CopyRight = styled.div`
  display: grid;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  height: 50px;
  justify-content: center;
  align-content: center;
  border-top: 1px solid ${({ theme }: ThxProps) => theme.main.bg};
  ${media.tablet`
    border-top: 0;
    height: 60px;
    justify-content: flex-end;
  `};
`;

export { BotBarCon, BotBarGrid, BotNavBar, BotLink, CopyRight, SocialBar };
