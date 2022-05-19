import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as FA from 'react-icons/fa'
import * as GI from 'react-icons/gi'
import * as BS from 'react-icons/bs'

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
            <S.SectionHeader>
              <G.TextSubtitle>Histórico como desenvolvedor</G.TextSubtitle>
            </S.SectionHeader>
            <p>Sou um <span>desenvolvedor web & mobile</span> que adora programação e suas possibilidades.</p>
            <p>Comecei a programar em 2018, durante um <span>curso técnico em programação de jogos digitais</span>, onde aprendi programação C# e Unity 3D e ganhei conhecimento técnico de gerenciamento e documentação de projetos.</p>
            <p>Em 2020, conheci o <span>front-end</span> e tenho estado em constante evolução, acompanhando as tendências e atualizações da área. Iniciei no desenvolvimento front-end utilizando <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span> e atualmente sou desenvolvedor <span>React</span> e <span>React Native</span>.</p>
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
    {icon: <BS.BsCurrencyBitcoin />, tag: 'Criptomoedas'},
    {icon: <I.FiDollarSign />, tag: 'Investimentos'},
    {icon: <GI.GiSpaceSuit />, tag: 'Jogar e Programar Jogos'},
    {icon: <I.FiTrello />, tag: 'Gestão de Projetos'},
    {icon: <GI.GiSpaceShuttle />, tag: 'Espaço'},
    {icon: <GI.GiTechnoHeart />, tag: 'Tecnologia'},
  ]

  return (
    <S.HobbiesInfos>
      {HobbiesTags.map(({ icon, tag }) => (
        <G.Tag key={tag}>{icon}{tag}</G.Tag>
      ))}
    </S.HobbiesInfos>
  )
}
