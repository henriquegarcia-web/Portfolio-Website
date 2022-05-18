import React, { useRef } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import createScrollSnap from 'scroll-snap'

import OnBoarding from './Views/OnBoarding'
import AboutMe from './Views/AboutMe'
import MyKnowledge from './Views/MyKnowledge'
import MyProjects from './Views/MyProjects'
import Thanks from './Views/Thanks'

const Home = ({ themeToggler, activeView }) => {

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

  function goToRef(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <S.Home>
      <S.HomeScrollContainer ref={container}>

        <S.FirstView ref={homeRef}><OnBoarding onBackClick={() => goToRef(aboutMeRef)} /></S.FirstView>
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
            <li onClick={() => goToRef(homeRef)}>Início</li>
            <li onClick={() => goToRef(aboutMeRef)}>Sobre mim</li>
            <li onClick={() => goToRef(myKnowRef)}>Meus conhecimentos</li>
            <li onClick={() => goToRef(myProjectsRef)}>Meus projetos</li>
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