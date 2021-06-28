import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --offWhite: #ededed;
    --grey: #cec9c9;
    --red: #FF4949;
    --lightGrey: #efefef;
    --bs: 0 6px 12px 0 rgba(0,0,0,0.2);
    --maxWidth: 1906px;
    --bg: #efefefed
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 2rem;
    background-color: var(--black);
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1rem 0;
  }

  .center {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;
