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
        <S.ContentTitle>
          <b>Front-end</b> Developer
        </S.ContentTitle>
        <S.ContentSubtitle>
          Since 2018 <b>coding solutions</b> as a <b>developer</b>
        </S.ContentSubtitle>
        <S.ContentInputs>
          <S.InputAboutMe onClick={toogleAboutMe}>+ About Me</S.InputAboutMe>
          <S.LinkMedia href='www.linkedin.com/in/henrique-p-garcia/' target='_blank'><I.FaLinkedinIn /></S.LinkMedia>
          <S.LinkMedia href='www.behance.net/henriquegarcia-dev' target='_blank'><I.FaBehance /></S.LinkMedia>
          <S.LinkMedia href='github.com/henriquegarcia-web' target='_blank'><I.FaGithub /></S.LinkMedia>
        </S.ContentInputs>
      </S.OnBoardingContent>
    </S.OnBoarding>
  )
}

export default OnBoarding
