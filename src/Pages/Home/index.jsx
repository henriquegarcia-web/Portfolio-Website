import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import createScrollSnap from 'scroll-snap'

import OnBoarding from './Views/OnBoarding'
import AboutMe from './Views/AboutMe'
import MyKnowledge from './Views/MyKnowledge'
import MyProjects from './Views/MyProjects'
import Thanks from './Views/Thanks'

const Home = ({ themeToggler, activeView }) => {

  const [currentView, setCurrentView] = useState('home')

  // --------------------------------------------------

  const container = React.createRef()

  const bindScrollSnap = () => {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '90%',
    }, () => {})
  }

  React.useEffect(() => {
    bindScrollSnap()
  }, [])

  // --------------------------------------------------

  const homeRef = useRef()
  const aboutMeRef = useRef()
  const myKnowRef = useRef()
  const myProjectsRef = useRef()
  const thanksRef = useRef()

  function goToRef(ref, view) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
    setCurrentView(view)
  }

  useEffect(() => {
    document.querySelector(`.${currentView}`).style.fontWeight = '700'
  }, [currentView])
  

  return (
    <S.Home>
      <S.HomeScrollContainer ref={container}>

        <S.FirstView ref={homeRef}><OnBoarding onBackClick={() => goToRef(aboutMeRef, 'about_me')} /></S.FirstView>
        <S.MiddleView ref={aboutMeRef}><AboutMe /></S.MiddleView>
        <S.MiddleView ref={myKnowRef}><MyKnowledge /></S.MiddleView>
        <S.MiddleView ref={myProjectsRef}><MyProjects /></S.MiddleView>
        <S.LastView ref={thanksRef}><Thanks /></S.LastView>

      </S.HomeScrollContainer>

      <S.HomeSettings>
        <S.Logo>
          <h1>Henrique P. Garcia</h1>
        </S.Logo>
        <S.Menu>
          <ul>
            <li className='home' onClick={() => goToRef(homeRef, 'home')}>Início</li>
            <li className='about_me' onClick={() => goToRef(aboutMeRef, 'about_me')}>Sobre mim</li>
            <li className='my_know' onClick={() => goToRef(myKnowRef, 'my_know')}>Meus conhecimentos</li>
            <li className='my_projects' onClick={() => goToRef(myProjectsRef, 'my_projects')}>Meus projetos</li>
          </ul>
        </S.Menu>
        <S.ThemeChanger onClick={themeToggler}>
          <I.FiMoon />
        </S.ThemeChanger>
      </S.HomeSettings>
    </S.Home>
  )
}

export default Home