import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    font-family: sans-serif;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  
  body html #root {
    height: 100%;
  }
`;
