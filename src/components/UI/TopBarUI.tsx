import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { Link, NavLink } from 'react-router-dom';

const TopBarCon = styled.div`
  display: grid;
  background: ${({ theme }: ThxProps) => theme.topBar.bg};
`;

const TopBarGrid = styled.div`
  display: grid;
  width: 1200px;
  align-self: center;
  justify-self: center;
  grid-template-columns: 1fr 1fr 50px;
`;

const Logo = styled.h1`
  margin: 0;
  align-self: center;
`;

const LogoLink = styled(Link)`
  font-family: 'Denmark';
  text-decoration: none;
  color: ${({ theme }: ThxProps) => theme.topBar.logo};
`;

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
`;

const NxLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  color: ${({ theme }: ThxProps) => theme.topBar.link};
  &.active {
    font-weight: bold;
  }
`;

const ThemeControls = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 50px;
`;

type ThemeBtnProp = ThxProps & { dark?: boolean };

const ThemeBtn = styled.button`
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 50px;
  background: ${({ theme, dark }: ThemeBtnProp) =>
    dark ? theme.themeBtn.dark.bg : theme.themeBtn.light.bg};
  color: ${({ theme, dark }: ThemeBtnProp) =>
    dark ? theme.themeBtn.dark.text : theme.themeBtn.light.text};
`;

export { TopBarCon, TopBarGrid, Logo, LogoLink, NavBar, ThemeControls, ThemeBtn, NxLink };
