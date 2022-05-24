import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Lexend Deca', sans-serif; */
    text-decoration: none;
    flex-shrink: 0;
    user-select: none;
    transition: .2s;
  }

  :root {

  }

  body {
    background: ${props => props.theme.body};
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
    /* background: ${props => props.theme.elements_light}; */
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.body};
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
  color: #000;

  border: 2px solid red;
`

// export const TextTitle = styled.h2`
//   margin: 0;
//   font-size: 24px;
//   font-weight: 600;
//   letter-spacing: 0.5px;

//   color: ${props => props.theme.font_color};
// `

// export const TextSubtitle = styled.h3`
//   margin: 0;
//   font-size: 18px;
//   font-weight: 400;
//   letter-spacing: 0.5px;

//   color: ${props => props.theme.font_color};
// `

// -------------------------------------- TAG

// export const Tag = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 13px;
//   font-weight: 400;
//   letter-spacing: 0.5px;
//   padding: 5px 14px;
//   border-radius: 50px;
//   margin: 0 8px 8px 0;
//   cursor: cell;
//   transition: .2s;

//   background-color: ${props => props.theme.elements_dark};
//   color: ${props => props.theme.font_color};

//   svg {
//     margin-right: 6px;
//     font-size: 15px;
//   }

//   &:hover {
//     background-color: ${props => props.theme.elements_light};
//   }
// `