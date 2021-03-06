import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    animation: OpacityAppear 0.7s ease both;
    background-color: black;

  }

  body {
    /* background-color: #999888; */
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }


  @keyframes OpacityAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
