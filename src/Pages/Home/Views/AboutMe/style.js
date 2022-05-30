import styled from "styled-components";
import { ViewContainer } from "../../../../Utils/globals";

export const AboutMe = styled(ViewContainer)`
  /* flex-direction: column; */
  padding-top: 60px;
`

// ------------------------------------ LEFT SIDE

export const ResumeText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;

  br {
    content: "";
    margin: 10px;
    display: block;
    font-size: 24%;
  }
`

export const HobbiesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// ------------------------------------ RIGHT SIDE

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 6px;
  padding: 15px;
  margin-top: 5px;

  background: ${props => props.theme.primary};
`

// ------------------------------------ Main Infos

export const MainInfosContainer = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;

  background: ${props => props.theme.hover};
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
  font-size: 20px;
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
  margin-bottom: 8px;
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
    margin-bottom: 20px;
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
    font-size: 18px;
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