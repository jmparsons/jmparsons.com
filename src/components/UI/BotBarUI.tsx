import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { NavLink, Link } from 'react-router-dom';
import { media, Breakpoints } from '../../utils/mq';
import IconLink from '../Site/IconLink';

const BotBarCon = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.botBar.bg};
`;

const BotBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  ${media.tablet`
    grid-template-columns: 1fr auto 1fr;
  `};
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
  `};
`;

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 50px;
  ${media.tablet`
    height: 60px;
    justify-content: flex-start;
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
  ${media.tablet`
    padding: 0 20px;
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

export { BotBarCon, BotBarGrid, NavBar, NxLink, CopyRight };
