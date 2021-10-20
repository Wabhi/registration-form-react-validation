import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  body {
      background: #f5f6f8;
      font-family: 'Lato', sans-serif;
      font-size: 1em
      color: #000000;
  }
`;

export default GlobalStyle;
