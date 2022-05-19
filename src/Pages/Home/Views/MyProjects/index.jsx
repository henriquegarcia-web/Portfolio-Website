import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fa'

import ImgBmw from '../../../../Assets/MyProjects/BMW.png'
import ImgDelivery from '../../../../Assets/MyProjects/DELIVERY.png'
import ImgDashboard from '../../../../Assets/MyProjects/DASHBOARD.png'
import ImgFelab from '../../../../Assets/MyProjects/FELAB.png'
import ImgMonky from '../../../../Assets/MyProjects/MONKY.png'
import ImgPanel from '../../../../Assets/MyProjects/PANEL.png'
import ImgQuiz from '../../../../Assets/MyProjects/QUIZ.png'
import ImgS1000RR from '../../../../Assets/MyProjects/S1000RR.png'
import ImgVegan from '../../../../Assets/MyProjects/VEGAN.png'

const MyProjects = () => {

  const MyProjects = [
    {
      image: ImgBmw,
      title: 'Desafio Front-End React',
      github: 'https://github.com/henriquegarcia-web/Vnda-Frontend-Challenge',
      behance: 'https://www.behance.net/gallery/143798089/Front-End-Challenge-com-tema-da-BMW',
      tags: [
        'JavaScript',
        'HTML',
        'SASS'
      ]
    },
    {
      image: ImgPanel,
      title: 'Desafio Front-End React Pleno',
      github: 'https://github.com/henriquegarcia-web/TaugorApp',
      behance: 'https://www.behance.net/gallery/142367647/Teste-Front-End-Pleno',
      tags: [
        'React',
        'Styled Components',
        'Material UI',
        'Firebase'
      ]
    },
    {
      image: ImgDashboard,
      title: 'Dashboard com React & Material UI',
      github: 'https://github.com/henriquegarcia-web/personal-blog-firebase-v1',
      behance: 'https://www.behance.net/gallery/142367199/Deashboard-V1-React-Material-UI',
      tags: [
        'React',
        'Styled Components',
        'Bootstrap'
      ]
    },
    {
      image: ImgMonky,
      title: 'Agência Monky Website',
      github: 'https://github.com/henriquegarcia-web/AgenciaMonky',
      behance: 'https://www.behance.net/gallery/142366503/Agencia-Monky-Website',
      tags: [
        'React',
        'Styled Components',
      ]
    },
    {
      image: ImgFelab,
      title: 'Front-End Lab - Projeto em desenvolvimento',
      github: 'https://github.com/henriquegarcia-web/Front-End-Lab',
      behance: 'https://www.behance.net/gallery/143993811/Front-End-Lab',
      tags: [
        'React',
        'Firebase',
        'MVP',
        'Blog',
        'User & Admin System'
      ]
    },
    {
      image: ImgS1000RR,
      title: 'BMW S 1000 RR - Website de Apresentação da Moto',
      github: 'https://github.com/henriquegarcia-web/S1000RR-Presentation-Website',
      behance: 'https://www.behance.net/gallery/143796439/BMW-S-1000-RR-Website-de-Apresentacao-da-Moto',
      tags: [
        'JavaScript',
        'HTML',
        'LESS'
      ]
    },
    {
      image: ImgQuiz,
      title: 'DevQuiz Layout HTML & Less',
      github: 'https://github.com/henriquegarcia-web/DevQuiz',
      behance: 'https://www.behance.net/gallery/143795339/DevQuiz-Layout-HTML-Less',
      tags: [
        'JavaScript',
        'HTML',
        'LESS'
      ]
    },
    {
      image: ImgDelivery,
      title: 'Aplicação Mobile de Delivery',
      github: 'https://github.com/henriquegarcia-web/delivery-app-template',
      behance: 'https://www.behance.net/gallery/143993147/Delivery-App',
      tags: [
        'React',
        'Styled Components',
      ]
    },
    {
      image: ImgVegan,
      title: 'One Page Site | Restaurante Vegano',
      github: 'https://github.com/henriquegarcia-web/VEGAN-CATALOG-REACT',
      behance: 'https://www.behance.net/gallery/131155837/One-Page-Site-Restaurante-Vegano',
      tags: [
        'React',
        'Styled Components',
      ]
    },
  ]

  return (
    <S.MyProjects>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>🗃</G.ViewHeaderIcon>
        <G.TextTitle>Meus projetos</G.TextTitle>
      </G.ViewHeader>
      <G.ViewContent>
        <S.MyProjectsContent>

          {MyProjects.map(({ image, title, github, behance, tags }) => (
            <S.ProjectContainer key={title}>
              <S.ProjectImageContainer>
                <S.ProjectImage src={image} alt={title} />
              </S.ProjectImageContainer>
              <S.ProjectDetails className='details'>
                <S.ProjectTitle>{title}</S.ProjectTitle>
                <S.ProjectLinks>
                  <S.Link href={github} target='_blank'><I.FaGithub />GitHub</S.Link>
                  <S.Link href={behance} target='_blank'><I.FaBehance />Behance</S.Link>
                </S.ProjectLinks>
                <S.ProjectTags>
                  {tags.map((tag) => (
                    <G.Tag key={tag}>{tag}</G.Tag>
                  ))}
                </S.ProjectTags>
              </S.ProjectDetails>
            </S.ProjectContainer>
          ))}

        </S.MyProjectsContent>
      </G.ViewContent>
    </S.MyProjects>
  )
}

export default MyProjects
