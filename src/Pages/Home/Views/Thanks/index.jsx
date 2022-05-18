import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'

import ImgPerfil from '../../../../Assets/Perfil.png'

const Thanks = () => {
  return (
    <S.Thanks>
      <S.ThanksContainer>
        <S.ThanksText>
          <h2>Obrigado pela sua visita!</h2>
        </S.ThanksText>
        <S.ThanksImage>
          <S.Image src={ImgPerfil} alt='Imagem Cartoon' />
        </S.ThanksImage>
      </S.ThanksContainer>
    </S.Thanks>
  )
}

export default Thanks