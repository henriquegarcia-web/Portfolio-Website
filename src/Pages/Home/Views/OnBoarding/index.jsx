import React from 'react'
import * as S from './style'
// import * as I from 'react-icons/fa'

import MetaImage from '../../../../Assets/Meta.png'

const OnBoarding = () => {
  return (
    <S.OnBoarding>
      <S.OnBoardingImage>
        <S.Image src={MetaImage} alt='' />
      </S.OnBoardingImage>
      <S.OnBoardingContent>
        <S.ContentTitle>
          Front-end Web & Mobile Developer
        </S.ContentTitle>
        <S.ContentSubtitle>
          Since 2018 coding <b>solutions</b> as a <b>developer</b>
        </S.ContentSubtitle>
        <S.ContentInputs>
          <S.InputAboutMe>+ About Me</S.InputAboutMe>
          <S.LinkMedia href='' target='_blank'></S.LinkMedia>
          <S.LinkMedia href='' target='_blank'></S.LinkMedia>
          <S.LinkMedia href='' target='_blank'></S.LinkMedia>
        </S.ContentInputs>
      </S.OnBoardingContent>
    </S.OnBoarding>
  )
}

export default OnBoarding

// eslint-disable-next-line no-lone-blocks
{/* <S.Link href='https://www.linkedin.com/in/henrique-p-garcia/' target='_blank'><I.FaLinkedinIn /></S.Link>
<S.Link href='https://www.behance.net/henriquegarcia-dev' target='_blank'><I.FaBehance /></S.Link>
<S.Link href='https://github.com/henriquegarcia-web' target='_blank'><I.FaGithub /></S.Link>
<S.Link href='mailto:henriquegarcia.dev@gmail.com' target='_blank'><I.FaEnvelope /></S.Link> */}