import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fi'

import PersonalImage from '../../../../Assets/Personal.jpeg'

import WebsiteData from '../../../../Data/data'

const AboutMe = () => {

  const { hobbiesAndInterests } = WebsiteData

  return (
    <S.AboutMe>
      <G.LeftContainer width='55'>
        <G.Section>
          <G.SectionTitle>RESUME</G.SectionTitle>
          <S.ResumeText>
            I wrote my first code in 2018 programming games with C# in Unity3D. I started looking for new solutions and technologies and then I found the front end. Since then, I have been constantly evolving, seeking to always be up to date and in line with trends in the area. I have a real passion for programming and its possibilities. <br/><br/>
            Software is one of the main keys to the digital environment. Currently, I'm learning to program new languages ​​and looking to work with the most modern technologies that are suitable for Full-Stack development.
          </S.ResumeText>
        </G.Section>

        <G.Section>
          <G.SectionTitle>HOBBIES & INTERESTS</G.SectionTitle>
          <S.HobbiesTags>
            {hobbiesAndInterests.eng.map(({ icon, tag }) => (
              <G.Tag key={tag}>{icon}{tag}</G.Tag>
            ))}
          </S.HobbiesTags>
        </G.Section>
      </G.LeftContainer>

      <G.RightContainer width='45'>
        <G.Section>
          <G.SectionTitle>CONTACT INFO</G.SectionTitle>
          <S.ContactInfoContainer>

            <S.MainInfosContainer>
              <S.PersonalImage><S.Image src={PersonalImage} alt='' /></S.PersonalImage>
              <S.PersonalInfos>
                <S.Name>Henrique Pereira Garcia</S.Name>
                <S.Post>Front-end Developer</S.Post>
                <AgeComponent />
              </S.PersonalInfos>
            </S.MainInfosContainer>

            <S.ContactInfosContainer>
              <S.ContactInfo><b>E-mail</b><p>henriquegarcia.dev@gmail.com</p></S.ContactInfo>
              <S.ContactInfo><b>Phone</b><p>(51) 9 9307-7788</p></S.ContactInfo>
              <S.ContactInfo><b>Location</b><p>Canoas, RS</p></S.ContactInfo>
              <S.ContactInfo>
                <b>Linkedin</b>
                <p><a 
                  href="https://www.linkedin.com/in/henrique-p-garcia/" 
                  target="_blank" 
                  rel="noreferrer">/henrique-p-garcia</a>
                </p>
              </S.ContactInfo>
              <S.ContactInfo>
                <b>Behance</b>
                <p><a 
                  href="https://www.behance.net/henriquegarcia-dev" 
                  target="_blank" 
                  rel="noreferrer">/henriquegarcia-web</a>
                </p>
              </S.ContactInfo>
              <S.ContactInfo>
                <b>GitHub</b>
                <p><a 
                  href="https://github.com/henriquegarcia-web" 
                  target="_blank" 
                  rel="noreferrer">/henriquegarcia-dev</a>
                </p>
              </S.ContactInfo>
            </S.ContactInfosContainer>

          </S.ContactInfoContainer>
        </G.Section>
      </G.RightContainer>
    </S.AboutMe>
  )
}

export default AboutMe

// --------------------------------------- AGE COMPONENT

const AgeComponent = () => {
  return (
    <S.AgeComponent>
      <S.AgeIcon><I.FiHeart /></S.AgeIcon>
      <S.AgeBar><S.AgeFill value={20}></S.AgeFill></S.AgeBar>
      <S.AgeValue>20%</S.AgeValue>
    </S.AgeComponent>
  )
}