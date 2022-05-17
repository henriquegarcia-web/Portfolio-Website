import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'

const Contact = () => {
  return (
    <S.Contact>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>📱</G.ViewHeaderIcon>
        <h4>Entre em contato</h4>
      </G.ViewHeader>
      <G.ViewContent>
        <S.ContactContent>

        </S.ContactContent>
      </G.ViewContent>
    </S.Contact>
  )
}

export default Contact