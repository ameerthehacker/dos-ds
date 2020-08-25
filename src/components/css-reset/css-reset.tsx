import '../../fonts/dos500c.woff';
import { createGlobalStyle } from 'styled-components';

export const CSSReset = createGlobalStyle`
  body {
    background: blue;
  }
  * {
    font-family: DOS, Monaco, Menlo, Consolas, 'Courier New', monospace;
  }
`;
