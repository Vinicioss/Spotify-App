import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: .6rem;
      border-radius: .5rem;
      background-color: ${({ theme }) => theme.colors.lightbackground};
    }
    ::-webkit-scrollbar-thumb {
        width: .6rem;
        border-radius: .5rem;
        background-color: ${({ theme }) => theme.colors.bachgroundHighLight};
    }
    ::-webkit-scrollbar-thumb:hover {
        width: .6rem;
        border-radius: .5rem;
        background-color: ${({ theme }) => theme.colors.text};
    }

    scrollbar-color: ${({ theme }) => theme.colors.bachgroundHighLight} ${({ theme }) => theme.colors.lightbackground} !important;
    scrollbar-width: thin !important;
  }

  body {
    background: ${props => props.theme.colors.lightbackground};
    color: ${props => props.theme.colors.text};
    font: 400 16px;
    font-family: 'Circular Std', sans-serif;
  }

  main {
    width: 100%;
    margin: 0px auto;
    max-width: 1400px;
    min-height: 100vh;
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
  .f_c{
    display: flex;
    flex-direction: column;
  }

  .button1 {
    cursor: pointer;
    min-width: 6rem;
    height: 2.3rem;
    text-align: center;
    padding-top: .1rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: .7rem;
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
