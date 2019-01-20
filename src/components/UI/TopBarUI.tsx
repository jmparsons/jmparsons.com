import styled from 'styled-components';
import Theme from '../../constants/Theme';
import { ThxProps } from '../../interfaces';

const TopBarGrid = styled.div`
  display: grid;
`;

const Logo = styled.div``;

const NavBar = styled.nav`
  background: ${({ theme }: ThxProps) => theme.topBar.bg};
`;

const ThemeControls = styled.div``;

const ThemeBtn = styled.button``;

export { TopBarGrid, Logo, NavBar, ThemeControls, ThemeBtn };
