import { createGlobalStyle } from 'styled-components';
import { ThxProps } from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }: ThxProps) => theme.main.bg};
  }
  a {
    color: ${({ theme }: ThxProps) => theme.main.link};
    &:hover {
      color: ${({ theme }: ThxProps) => theme.main.activeLink};
    }
  }
`;

export default GlobalStyle;
