import { createGlobalStyle } from 'styled-components';
import { ThxProps } from './Theme';

export const GlobalStyle = createGlobalStyle`
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
