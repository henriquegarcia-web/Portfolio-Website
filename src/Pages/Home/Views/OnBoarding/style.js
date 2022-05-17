import styled from "styled-components";

export const OnBoarding = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  /* border: 2px solid red; */
`

export const OnBoardingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonalLinks = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;

  background-color: ${props => props.theme.elements_dark};

  svg {
    font-size: 18px;

    color: ${props => props.theme.font_color};
  }
`

export const PersonalDescription = styled.div`
  margin-bottom: 30px;
  margin-left: 15px;

  color: ${props => props.theme.font_color};

  h4 {
    font-size: 44px;
    font-weight: 700;
    padding-left: 10px;

    border-left: 5px solid ${props => props.theme.font_color};
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;

    border-left: 5px solid ${props => props.theme.font_color};

    u {
      text-decoration: underline;
    }
  }
`

export const OnBoardingInputs = styled.div`


  button {
    font-size: 15px;
    padding: 6px 15px;
    border-radius: 50px;

    background-color: ${props => props.theme.elements_dark};
    color: ${props => props.theme.font_color};
  }
`