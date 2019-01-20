import styled from 'styled-components';
import { ThxProps } from '../../interfaces';
import Colors from '../../constants/Colors';

const TopBarGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  background: ${Colors.midGray};
`;

const Logo = styled.h1`
  margin: 0;
  align-self: center;
  a {
    font-family: 'Denmark';
    text-decoration: none;
    color: ${Colors.white};
  }
`;

const NavBar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background: ${({ theme }: ThxProps) => theme.topBar.bg};
`;

const ThemeControls = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const ThemeBtn = styled.button`
  border: none;
  outline: 0;
  background: ${Colors.white};
`;

export { TopBarGrid, Logo, NavBar, ThemeControls, ThemeBtn };
