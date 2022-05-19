import styled from "styled-components";

export const OnBoarding = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`

export const OnBoardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

  background-color: ${props => props.theme.body};

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
    flex-wrap: wrap;
    font-size: 46px;
    font-weight: 800;
    padding-left: 10px;
    margin-bottom: 20px;

    border-left: 4px solid ${props => props.theme.font_color};

    div {
      animation: HandRotate 1.5s linear infinite;
      margin: 0 15px;
    }

    span {
      margin-left: 15px;
    }

    b {
      display: flex;
      font-weight: 800;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    padding-left: 10px;
    line-height: 32px;

    border-left: 4px solid ${props => props.theme.font_color};

    u {
      text-decoration: underline;
      cursor: cell;
      transition: 0.15s;
      margin-left: 1vh;

      &:hover {
        color: ${props => props.theme.variant};
      }
    }

    b {
      display: flex;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 760px) {
    h3 {
      font-size: 8vw;
      font-weight: 800;
      margin-bottom: 15px;
      padding-left: 15px;
      border-left: 3px solid ${props => props.theme.font_color};

      b {
        margin-right: 100%;
      }
    }

    h2 {
      font-size: 4vw;
      font-weight: 600;

      u {
        margin-right: 100%;
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

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.font_color};

    &:hover {
      background-color: ${props => props.theme.elements_light};
    }

    &:nth-of-type(1) {
      @media screen and (max-width: 760px) {
        display: none;
      }
    }

    &:nth-of-type(2) {
      display: none;

      @media screen and (max-width: 760px) {
        display: block;
      }
    }
  }
`