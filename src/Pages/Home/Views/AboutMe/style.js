import styled from "styled-components";

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 15px 15px 15px;
`

export const MainText = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 15px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.5px;

    color: ${props => props.theme.font_color};
  }
`

export const AboutMeSections = styled.div`
  display: flex;
  height: calc(100% - 245px);
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  height: 100%;
  margin-right: 30px;
`

export const HobbiesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  height: 100%;
  margin-left: 30px;
`

export const SectionHeader = styled.div`
  height: 45px;
`

export const SectionContent = styled.div`
  height: calc(100% - 45px);
`

// ------------------------------- Informações de Contato

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  /* padding: 10px; */

  /* background-color: ${props => props.theme.elements_dark}; */
`

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 13px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  
  * {
    margin: 0;
  }

  color: ${props => props.theme.font_color};
  background-color: ${props => props.theme.elements_dark};

  b {
    font-weight: 600;
  }

  p {
    font-weight: 400;

    a {
      color: ${props => props.theme.variant};
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

// ------------------------------- Hobbies & Interesses

export const HobbiesInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
`