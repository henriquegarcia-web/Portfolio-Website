import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fi'

const AboutMe = () => {
  return (
    <S.AboutMe>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>🙂</G.ViewHeaderIcon>
        <G.TextTitle>Sobre mim</G.TextTitle>
      </G.ViewHeader>
      <G.ViewContent>
        <S.AboutMeContent>

          <S.MainText>
            <p>Sou um <span>desenvolvedor web & mobile</span> que adora <span>programação</span> e suas <span>possibilidades</span>.</p>
            <p>Comecei a programar em 2018, durante um curso técnico em programação de jogos digitais, onde aprendi programação C# e Unity 3D e ganhei <span>conhecimento técnico</span> de gerenciamento e documentação de projetos.</p>
            <p>Em 2020, conheci o front-end e tenho estado em constante evolução, acompanhando as tendências e atualizações da área. Iniciei no desenvolvolvimento front-end utilzando <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span> e atualmente sou desenvolvedor <span>React</span> e <span>React Native</span>.</p>
          </S.MainText>

          <S.AboutMeSections>

            <S.ContactSection>
              <S.SectionHeader>
                <G.TextSubtitle>Informações de contato</G.TextSubtitle>
              </S.SectionHeader>
              <S.SectionContent>
                <ContactInfos />
              </S.SectionContent>
            </S.ContactSection>

            <S.HobbiesSection>
              <S.SectionHeader>
                <G.TextSubtitle>Hobbies & Interesses</G.TextSubtitle>
              </S.SectionHeader>
              <S.SectionContent>
                <HobbiesInfos />
              </S.SectionContent>
            </S.HobbiesSection>

          </S.AboutMeSections>

        </S.AboutMeContent>
      </G.ViewContent>
    </S.AboutMe>
  )
}

export default AboutMe

// ------------------------------- Componente de Informações de Contato

export const ContactInfos = () => {
  return (
    <S.ContactInfos>
      <S.ContactInfo>
        <b>E-mail</b><p>henriquegarcia.dev@gmail.com</p>
      </S.ContactInfo>
      <S.ContactInfo>
        <b>Telefone</b><p>(51) 9 9307-7788</p>
      </S.ContactInfo>
      <S.ContactInfo>
        <b>Localização</b><p>Canoas, RS</p>
      </S.ContactInfo>
      <S.ContactInfo>
        <b>Linkedin</b><p><a href="https://www.linkedin.com/in/henrique-p-garcia/" target="_blank" rel="noreferrer">/henrique-p-garcia</a></p>
      </S.ContactInfo>
      <S.ContactInfo>
        <b>Behance</b><p><a href="https://www.behance.net/henriquegarcia-dev" target="_blank" rel="noreferrer">/henriquegarcia-web</a></p>
      </S.ContactInfo>
      <S.ContactInfo>
        <b>GitHub</b><p><a href="https://github.com/henriquegarcia-web" target="_blank" rel="noreferrer">/henriquegarcia-dev</a></p>
      </S.ContactInfo>
    </S.ContactInfos>
  )
}

// ------------------------------- Componente de Hobbies & Interesses

export const HobbiesInfos = () => {

  const HobbiesTags = [
    {icon: <I.FiSmile />, tag: 'Desenvolvimento Pessoal'},
    {icon: <I.FiTrendingUp />, tag: 'Empreendedorismo'},
    {icon: <I.FiCodepen />, tag: 'Metaverso'},
    {icon: <I.FiDollarSign />, tag: 'Criptomoedas & Investimentos'},
    {icon: <I.FiMonitor />, tag: 'Jogar e Programar Jogos'},
    {icon: <I.FiTrello />, tag: 'Gestão de Projetos'},
  ]

  return (
    <S.HobbiesInfos>
      {HobbiesTags.map(({ icon, tag }) => (
        <S.HobbiesTag key={tag}>{icon}{tag}</S.HobbiesTag>
      ))}
    </S.HobbiesInfos>
  )
}
