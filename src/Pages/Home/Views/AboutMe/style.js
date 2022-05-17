import styled from "styled-components";

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  max-width: 1000px;
  height: 100%;

  /* border: 2px solid red; */
`

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  padding: 15px;

  /* border: 1px solid orange; */
`

export const MainText = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 15px;

  /* border: 2px solid orange; */

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;

    color: ${props => props.theme.font_color};
  }
`

export const AboutMeSections = styled.div`
  display: flex;
  height: calc(100% - 245px);

  /* border: 2px solid blue; */
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  height: 100%;
  margin-right: 30px;

  /* border: 2px solid pink; */
`

export const HobbiesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  height: 100%;
  margin-left: 30px;

  /* border: 2px solid yellow; */
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
  padding: 12px;

  background-color: ${props => props.theme.elements_dark};
`

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  
  * {
    margin: 0;
  }

  color: ${props => props.theme.font_color};
  background-color: ${props => props.theme.body};

  b {
    font-weight: 500;
  }

  p {
    font-weight: 300;

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

export const HobbiesTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
  padding: 6px 12px;
  border-radius: 50px;
  margin: 0 10px 10px 0;

  background-color: ${props => props.theme.elements_dark};
  color: ${props => props.theme.font_color};

  svg {
    margin-right: 6px;
    font-size: 16px;
  }
`