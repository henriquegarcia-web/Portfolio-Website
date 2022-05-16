import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
  }

  :root {
    --theme-pink: #F20587;
    --theme-soft-purple: #E4CEF2;
    --theme-purple: #8C5CF2;
    --theme-blue: #5E35F2;
    --theme-black: #1D1E26;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle

// --------------------------------- COMPONENTES

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  color: #000;
  background-color: #e6e6e6;
`