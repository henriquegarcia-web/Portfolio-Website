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
  const [menuOpen, setMenuOpen] = useState(false)

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
    if (!view || view === '') return
    setCurrentView(view)
  }

  useEffect(() => {
    document.querySelectorAll(`.${currentView}`).forEach((element) => {
      element.style.fontWeight = '700'
    })
  }, [currentView])
  
  // on

  return (
    <S.Home>
      <S.HomeScrollContainer ref={container}>

        <S.FirstView className='view__home' ref={homeRef}>
          <OnBoarding 
            onBackClick={() => goToRef(aboutMeRef, 'about_me')}
            goToThanks={() => goToRef(thanksRef)} 
          />
        </S.FirstView>
        <S.MiddleView className='view__about_me' ref={aboutMeRef}><AboutMe /></S.MiddleView>
        <S.MiddleView className='view__my_know' ref={myKnowRef}><MyKnowledge /></S.MiddleView>
        <S.MiddleView className='view__my_projects' ref={myProjectsRef}><MyProjects /></S.MiddleView>
        <S.LastView className='view__thanks' ref={thanksRef}><Thanks /></S.LastView>

      </S.HomeScrollContainer>

      <S.HomeSettings>
        <S.Logo>
          <h1>Henrique P. Garcia</h1>
        </S.Logo>
        <S.MenuDesktop>
          <ul>
            <li className='home' onClick={() => goToRef(homeRef, 'home')}>Início</li>
            <li className='about_me' onClick={() => goToRef(aboutMeRef, 'about_me')}>Sobre mim</li>
            <li className='my_know' onClick={() => goToRef(myKnowRef, 'my_know')}>Meus conhecimentos</li>
            <li className='my_projects' onClick={() => goToRef(myProjectsRef, 'my_projects')}>Meus projetos</li>
          </ul>
        </S.MenuDesktop>
        <S.MenuMobile onClick={() => setMenuOpen(!menuOpen)}>
          <I.FiMenu />
        </S.MenuMobile>
        <S.ThemeChanger onClick={themeToggler}>
          <I.FiMoon />
        </S.ThemeChanger>
      </S.HomeSettings>

      <S.MobileMenu menuOpen={menuOpen}>
        <S.MobileMenuContainer menuOpen={menuOpen}>
          <ul>
            <li className='home' onClick={() => goToRef(homeRef, 'home')}>Início<I.FiHome /></li>
            {/* <li className='about_me' onClick={() => goToRef(aboutMeRef, 'about_me')}>Sobre mim<I.FiSmile /></li>
            <li className='my_know' onClick={() => goToRef(myKnowRef, 'my_know')}>Meus conhecimentos<I.FiBook /></li>
            <li className='my_projects' onClick={() => goToRef(myProjectsRef, 'my_projects')}>Meus projetos<I.FiPackage /></li> */}
            <li className='thanks' onClick={() => goToRef(thanksRef, 'thanks')}>Agrandecimento<I.FiSmile /></li>
          </ul>
        </S.MobileMenuContainer>
      </S.MobileMenu>
    </S.Home>
  )
}

export default Home