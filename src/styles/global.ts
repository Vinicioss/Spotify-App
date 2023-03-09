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
  }

  a {
    all: unset;
    text-decoration: none;
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  button {
    all: unset;
  }

  .button1 {
    cursor: pointer;
    padding: .6rem 1.6rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8rem;
    color: ${props => props.theme.colors.textLight};
    border: 1px solid ${props => props.theme.colors.textLight};
    border-radius: 1.6rem;
    background: none;
  }
  .button1:hover {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.textLight};
  }

  .wh_100 {
    width: 100%;
    height: 100%;
  }

  .t_03s{
    transition: all 0.3s;
  }

  @media (max-width: 770px) {

    main {
      padding: 0;
    }

  }


`;
