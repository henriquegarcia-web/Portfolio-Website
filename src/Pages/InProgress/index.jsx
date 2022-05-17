import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fa'

import BgVideo from '../../Assets/BgVideo.mp4';

const InProgressPage = () => {
  return (
    <S.InProgress>
      <div className='in_progress__bg__color'></div>
      <div className='in_progress__bg__video'>
        <video className='videoTag' autoPlay loop muted>
            <source src={BgVideo} type='video/mp4' />
        </video>
      </div>
      <div className='in_progress__content'>
        <div class="dot-floating"></div>

        <h1>Website em Produção 🔨</h1>

        <p>Me acompanhe em:</p>

        <S.SocialLinks>
          <S.Link 
            href='https://www.linkedin.com/in/henrique-p-garcia/'
            target='_blank'
          ><I.FaLinkedinIn /></S.Link>
          <S.Link 
            href='https://www.behance.net/henriquegarcia-dev'
            target='_blank'
          ><I.FaBehance /></S.Link>
          <S.Link 
            href='https://github.com/henriquegarcia-web'
            target='_blank'
          ><I.FaGithub /></S.Link>
          <S.Link 
            href='mailto:henriquegarcia.dev@gmail.com'
            target='_blank'
          ><I.FaEnvelope /></S.Link>
        </S.SocialLinks>
      </div>
    </S.InProgress>
  )
}

export default InProgressPage


