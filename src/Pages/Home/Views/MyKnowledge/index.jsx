import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'

const MyKnowledge = () => {
  return (
    <S.MyKnowledge>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>💡</G.ViewHeaderIcon>
        <h4>Meus conhecimentos</h4>
      </G.ViewHeader>
      <G.ViewContent>
        <S.MyKnowledgeContent>

        </S.MyKnowledgeContent>
      </G.ViewContent>
    </S.MyKnowledge>
  )
}

export default MyKnowledge