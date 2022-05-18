import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fa'

import ImgPerfil from '../../../../Assets/Perfil.png'

const Thanks = () => {
  return (
    <S.Thanks>
      <S.ThanksContainer>
        <S.ThanksText>
          <h2><span>Obrigado</span> pela visita!</h2>
          <S.PersonalLinks>
            <S.Link href='https://www.linkedin.com/in/henrique-p-garcia/' target='_blank'><I.FaLinkedinIn /></S.Link>
            <S.Link href='https://www.behance.net/henriquegarcia-dev' target='_blank'><I.FaBehance /></S.Link>
            <S.Link href='https://github.com/henriquegarcia-web' target='_blank'><I.FaGithub /></S.Link>
            <S.Link href='mailto:henriquegarcia.dev@gmail.com' target='_blank'><I.FaEnvelope /></S.Link>
        </S.PersonalLinks>
        </S.ThanksText>
        <S.ThanksImage>
          <S.Image src={ImgPerfil} alt='Imagem Cartoon' />
        </S.ThanksImage>
      </S.ThanksContainer>
    </S.Thanks>
  )
}

export default Thanks