import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.lightbackground};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }

  main {
    min-height: 100vh;
    max-height: 100vh;
    padding-left: 6rem;
    display: grid;
    grid-template-columns: max-content 1fr;
  }

  a {
    all: unset;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  .w_100 {
    width: 100%;
  }

  .t_03s{
    transition: all 0.3s;
  }

`;
