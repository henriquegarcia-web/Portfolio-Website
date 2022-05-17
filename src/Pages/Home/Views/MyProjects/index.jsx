import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'

const MyProjects = () => {
  return (
    <S.MyProjects>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>🗃</G.ViewHeaderIcon>
        <h4>Meus projetos</h4>
      </G.ViewHeader>
      <G.ViewContent>
        <S.MyProjectsContent>

        </S.MyProjectsContent>
      </G.ViewContent>
    </S.MyProjects>
  )
}

export default MyProjects