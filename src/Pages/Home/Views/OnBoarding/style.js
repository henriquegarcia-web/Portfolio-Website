import styled from "styled-components";
import { Button, Subtitle, Title, ViewContainer } from "../../../../Utils/globals";

export const OnBoarding = styled(ViewContainer)`
  display: flex;
`

export const OnBoardingImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
`

export const Image = styled.img`
  width: 150%;
  transform: translate(60px, 20px);
`

export const OnBoardingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`

export const ContentTitle = styled(Title)`
  margin-bottom: 15px;
`

export const ContentSubtitle = styled(Subtitle)`
  margin-bottom: 40px;

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

  &:hover {
    background: ${props => props.theme.secondary};
  }

  svg {
    font-size: 20px;
  }
`