import styled from 'styled-components';
import Theme from '../../constants/Theme';
import { ThemexStyleProps } from '../../interfaces';

const NavBar = styled.nav`
  background: ${({ theme }: ThemexStyleProps) => theme.topBar.bg};
`;

export { NavBar };
