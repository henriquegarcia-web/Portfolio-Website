import styled from "styled-components";
import { Button, Subtitle, Title, ViewContainer } from "../../../../Utils/globals";

export const OnBoarding = styled(ViewContainer)`
  display: flex;
`

export const OnBoardingImage = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 40%;
  height: 100%;
`

export const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  max-width: 850px;
  transform: translate(-140px, 20px);
  pointer-events: none;
`

export const OnBoardingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`

export const ContentAbsolute = styled.div`
  position: absolute;
`

export const ContentTitle = styled(Title)`
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 14px;

  b {
    font-weight: 600;
  }
`

export const ContentSubtitle = styled(Subtitle)`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 60px;

  b {
    font-weight: 500;
  }
`

export const ContentInputs = styled.div`
  display: flex;
`

export const InputAboutMe = styled(Button)`
  height: 40px;
  padding: 0 15px;
  margin-right: 20px;
`

export const LinkMedia = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 10px;

  background: ${props => props.theme.primary};

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${props => props.theme.secondary};

    svg {
      transform: scale(1.2);
    }
  }
`