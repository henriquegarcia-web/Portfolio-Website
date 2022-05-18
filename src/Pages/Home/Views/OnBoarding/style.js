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
  margin-bottom: 30px;
  margin-left: 18px;

  color: ${props => props.theme.font_color};

  h3 {
    font-size: 46px;
    font-weight: 800;
    padding-left: 10px;
    margin-bottom: 20px;

    border-left: 4px solid ${props => props.theme.font_color};
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    padding-left: 10px;

    border-left: 4px solid ${props => props.theme.font_color};

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
    cursor: pointer;
    transition: .2s;

    background-color: ${props => props.theme.elements_dark};
    color: ${props => props.theme.font_color};

    &:hover {
      background-color: ${props => props.theme.elements_light};
    }
  }
`