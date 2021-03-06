import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @-webkit-keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  body {
    /* background: ${props => props.theme.body}; */
    
    background:
    linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
    background: linear-gradient(-45deg, #22056f, #521cba, #dca07b, #b92437, #330a2c);
    background-size: 100% 100%;
    /* -webkit-animation: gradient 20s ease infinite;
	        animation: gradient 20s ease infinite; */
    backdrop-filter: blur(100px);

    height: 100vh;

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      /* font-family: 'Roboto', sans-serif; */
      font-family: 'Lexend Deca', sans-serif;
      text-decoration: none;
      list-style: none;
      flex-shrink: 0;
      /* user-select: none; */
      transition: .2s;
      letter-spacing: 0.5px;

      color: ${props => props.theme.font_color};
    }
  }

  a:hover {
    text-decoration: none;
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
    background-color: gray;
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
  padding: 70px 20px 20px 20px;
  box-sizing: border-box;
`

export const ViewContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 50px;
  cursor: pointer;

  background: ${props => props.theme.primary};

  &:hover {
    background: ${props => props.theme.secondary};
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`

// -------------------------------------- VIEWS SECTIONS

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}%;
  height: 100%;
  padding-right: 25px;

  border: 2px solid red;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}%;
  height: 100%;
  padding-left: 25px;

  border: 2px solid orange;
`

// -------------------------------------- TAG

export const Tag = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 13px;
  font-weight: 400;
  padding: 5px 14px;
  border-radius: 50px;
  margin: 0 10px 10px 0;
  cursor: cell;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.font_color};

  svg {
    margin-right: 6px;
    font-size: 15px;
  }

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`