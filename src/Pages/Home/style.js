import styled from "styled-components";
import { Page } from '../../Utils/globals'

export const Home = styled.div`
  
`

export const HomeScrollContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const View = styled(Page)`
  height: 100%;
  min-height: 100%;

  background-image: url(data:image/png;base64,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);
`



export const AboutMe = styled.div`
  pointer-events: ${props => props.active ? 'initial' : 'none'};
`

export const AboutMeBackground = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: .4s;

  backdrop-filter: blur(3px);
  background: rgba(40, 46, 54, 0.3);

  opacity: ${props => props.active ? '1' : '0'};
`

export const AboutMeContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 640px;
  height: 100%;
  padding: 90px 40px 40px 40px;
  transition: .4s;

  backdrop-filter: blur(4px);
  background: rgba(40, 46, 54, 0.9);

  transform: translateX(${props => props.active ? '0' : '100%'});
`

export const AboutMeHeader = styled.h2`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 200;
  margin-bottom: 40px;

  padding-left: 10px;
  border-left: 2px solid ${props => props.theme.font_color};
`



// ------------------------------------ LEFT SIDE

export const ResumeText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;

  br {
    content: "";
    margin: 8px;
    display: block;
    font-size: 24%;
  }
`

// ------------------------------------ RIGHT SIDE

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 6px;
  /* padding: 15px; */
  margin-top: 5px;
`

// ------------------------------------ Main Infos

export const MainInfosContainer = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;

  background: ${props => props.theme.body};
`

export const PersonalImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PersonalInfos = styled.div`
  width: calc(100% - 95px);
`

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 4px;
`

export const Post = styled.h2`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;

  color: ${props => props.theme.font_color_variant};
`

// ------------------------------------ Contact Infos

export const ContactInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 7px 16px;
  margin-bottom: 5px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;

  background: ${props => props.theme.hover};

  b {
    font-weight: 400; 
  }

  p, a {
    color: ${props => props.theme.font_color_variant};
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: ${props => props.theme.body};

    p, a {
      color: ${props => props.theme.font_color};
    }
  }

  a {
    font-weight: 400;

    &:hover {
      color: ${props => props.theme.variant};
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 15px;
  }
`

// --------------------------------------- AGE COMPONENT

export const AgeComponent = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1px;
`

export const AgeIcon = styled.div`
  display: flex;
  width: 20px;
  margin-right: 10px;

  svg {
    font-size: 20px;
  }
`

export const AgeBar = styled.div`
  display: flex;
  width: calc(100% - 70px);
  height: 6px;
  border-radius: 6px;
  overflow: hidden;
  
  background: ${props => props.theme.secondary};
`

export const AgeFill = styled.div`
  display: flex;
  width: ${props => props.value}%;
  border-radius: 6px;

  background: ${props => props.theme.variant};
`

export const AgeValue = styled.div`
  display: flex;
  width: 30px;
  margin-left: 10px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 1px;
`