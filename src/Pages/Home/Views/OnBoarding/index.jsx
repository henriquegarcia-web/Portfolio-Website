import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fa'

const OnBoarding = ({ onBackClick, goToThanks }) => {
  return (
    <S.OnBoarding>
      <S.OnBoardingContainer>
        <S.PersonalLinks>
          <S.Link href='https://www.linkedin.com/in/henrique-p-garcia/' target='_blank'><I.FaLinkedinIn /></S.Link>
          <S.Link href='https://www.behance.net/henriquegarcia-dev' target='_blank'><I.FaBehance /></S.Link>
          <S.Link href='https://github.com/henriquegarcia-web' target='_blank'><I.FaGithub /></S.Link>
          <S.Link href='mailto:henriquegarcia.dev@gmail.com' target='_blank'><I.FaEnvelope /></S.Link>
        </S.PersonalLinks>
        <S.PersonalDescription>
          <h3><b>Olá <div>👋🏼</div></b> Eu sou o <span>Henrique</span></h3>
          <h2><b>Desenvolvedor <u>Front-End</u></b> React & React Native</h2>
        </S.PersonalDescription>
        <S.OnBoardingInputs>
          <button onClick={onBackClick}>+ Sobre mim</button>
          <button onClick={goToThanks}>Em breve visualização mobile</button>
        </S.OnBoardingInputs>
      </S.OnBoardingContainer>
    </S.OnBoarding>
  )
}

export default OnBoarding