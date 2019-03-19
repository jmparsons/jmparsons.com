import { createGlobalStyle } from 'styled-components';
import { ThxProps } from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }: ThxProps) => theme.main.bg};
  }
`;

export default GlobalStyle;
