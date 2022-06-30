import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fa'

import MetaImage from '../../../../Assets/Meta.png'

const OnBoarding = ({ toogleAboutMe }) => {
  return (
    <S.OnBoarding>
      <S.OnBoardingImage>
        <S.Image src={MetaImage} alt='' />
      </S.OnBoardingImage>
      <S.OnBoardingContent>
        <S.ContentAbsolute>
          <S.ContentTitle>
            <b>Front-end</b> Developer
          </S.ContentTitle>
          <S.ContentSubtitle>
            Desde 2018 <b>condificando soluções</b> como <b>desenvolvedor</b>
          </S.ContentSubtitle>
          <S.ContentInputs>
            <S.InputAboutMe onClick={toogleAboutMe}>+ Sobre mim</S.InputAboutMe>
            <S.LinkMedia href='https://www.linkedin.com/in/henrique-p-garcia/' target='_blank'><I.FaLinkedinIn /></S.LinkMedia>
            <S.LinkMedia href='https://www.behance.net/henriquegarcia-dev' target='_blank'><I.FaBehance /></S.LinkMedia>
            <S.LinkMedia href='https://github.com/henriquegarcia-web' target='_blank'><I.FaGithub /></S.LinkMedia>
          </S.ContentInputs>
        </S.ContentAbsolute>
      </S.OnBoardingContent>
    </S.OnBoarding>
  )
}

export default OnBoarding
