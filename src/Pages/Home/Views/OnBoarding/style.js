import styled from "styled-components";

export const OnBoarding = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;

  /* border: 2px solid red; */
`

export const OnBoardingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonalLinks = styled.div`
  display: flex;
  margin-bottom: 50px;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
  cursor: pointer;
  transition: .2s;

  background-color: ${props => props.theme.elements_dark};

  svg {
    font-size: 18px;

    color: ${props => props.theme.font_color};
  }

  &:hover {
    background-color: ${props => props.theme.elements_light};
  }
`

export const PersonalDescription = styled.div`
  margin-bottom: 50px;
  margin-left: 18px;

  color: ${props => props.theme.font_color};

  @keyframes HandRotate {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(30deg); }
    100% { transform: rotate(0deg); }
  }

  h3 {
    display: flex;
    font-size: 46px;
    font-weight: 800;
    padding-left: 10px;
    margin-bottom: 20px;

    border-left: 4px solid ${props => props.theme.font_color};

    div {
      /* transform: rotate(0); */
      animation: HandRotate 1.5s linear infinite;
      margin: 0 15px;
    }

    span {
      margin-left: 15px;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    padding-left: 10px;

    border-left: 4px solid ${props => props.theme.font_color};

    u {
      text-decoration: underline;
      cursor: cell;
      transition: 0.15s;

      &:hover {
        color: ${props => props.theme.variant};
      }
    }
  }
`

export const OnBoardingInputs = styled.div`
  button {
    font-size: 15px;
    padding: 6px 15px;
    border-radius: 50px;
    cursor: pointer;
    transition: .2s;

    background-color: ${props => props.theme.elements_dark};
    color: ${props => props.theme.font_color};

    &:hover {
      background-color: ${props => props.theme.elements_light};
    }
  }
`