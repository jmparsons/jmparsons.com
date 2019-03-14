import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { NavLink, Link } from 'react-router-dom';
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
  padding: 0 20px;
  box-sizing: border-box;
  ${media.tablet`
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
  ${media.tablet`
    height: 60px;
    justify-content: flex-start;
  `};
`;

const BotLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  color: ${({ theme }: ThxProps) => theme.botBar.link};
  &.active {
    font-weight: bold;
  }
  ${media.tablet`
    margin-right: 20px;
  `};
`;

const CopyRight = styled.div`
  display: grid;
  height: 50px;
  justify-content: center;
  align-content: center;
  ${media.tablet`
    height: 60px;
    justify-content: flex-end;
  `};
`;

export { BotBarCon, BotBarGrid, BotNavBar, BotLink, CopyRight, SocialBar };
