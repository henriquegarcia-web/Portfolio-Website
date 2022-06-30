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
          <G.SectionTitle>RESUMO</G.SectionTitle>
          <S.ResumeText>
            Eu escrevi meu primeiro código em jogos de programação de 2018 com C# no Unity3D. Comecei a procurar novas soluções e tecnologias e depois encontrei o front-end. Desde então, venho em constante evolução, buscando estar sempre atualizado e alinhado com as tendências da área. Eu tenho uma verdadeira paixão por programação e suas possibilidades. <br/><br/>
            O software é uma das principais chaves para o ambiente digital. Atualmente, estou me dedicando à minha especialização no front-end e pretendo seguir carreira no gerenciamento de projetos, como PO ou SM.
          </S.ResumeText>
        </G.Section>

        <G.Section>
          <G.SectionTitle>HOBBIES & INTERESSES</G.SectionTitle>
          <S.HobbiesTags>
            {hobbiesAndInterests.eng.map(({ icon, tag }) => (
              <G.Tag key={tag}>{icon}{tag}</G.Tag>
            ))}
          </S.HobbiesTags>
        </G.Section>
      </G.LeftContainer>

      <G.RightContainer width='45'>
        <G.Section>
          <G.SectionTitle>INFORMAÇÕES DE CONTATO</G.SectionTitle>
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
              <S.ContactInfo><b>Telefone</b><p>(51) 9 9307-7788</p></S.ContactInfo>
              <S.ContactInfo><b>Lacalização</b><p>Canoas, RS</p></S.ContactInfo>
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