import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  @font-face {
    font-family: 'Denmark';
    src: url('./assets/fonts/jmp-denmark.eot');
    src: url('./assets/fonts/jmp-denmark.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/jmp-denmark.woff') format('woff'),
      url('./assets/fonts/jmp-denmark.ttf') format('truetype'),
      url('./assets/fonts/jmp-denmark.svg#webfont') format('svg');
  }
`;

export default GlobalStyle;
