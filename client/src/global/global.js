import { createGlobalStyle } from 'styled-components';
import { bool, object } from 'prop-types';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body, #root, main {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
  }
  
  main {
    width: calc(100% - ${({ theme, open }) => open ? theme.drawer : "0"});
    margin-left: ${({ theme, open }) => open ? theme.drawer : "0"};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }
  `;

GlobalStyles.propTypes = {
  theme: object,
  open: bool.isRequired,
};

  export default GlobalStyles;
