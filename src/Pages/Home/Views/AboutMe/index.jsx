import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'

const AboutMe = () => {
  return (
    <S.AboutMe>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>🙂</G.ViewHeaderIcon>
        <h4>Sobre mim</h4>
      </G.ViewHeader>
      <G.ViewContent>
        <S.AboutMeContent>

        </S.AboutMeContent>
      </G.ViewContent>
    </S.AboutMe>
  )
}

export default AboutMe