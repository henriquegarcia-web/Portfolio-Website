import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import createScrollSnap from 'scroll-snap'

import OnBoarding from './Views/OnBoarding'
import AboutMe from './Views/AboutMe'
import MyKnowledge from './Views/MyKnowledge'
import MyProjects from './Views/MyProjects'
import Thanks from './Views/Thanks'

const Home = ({ themeToggler }) => {

  const container = React.createRef()

  const bindScrollSnap = () => {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '90%',
    }, () => console.log('snapped'))
  }

  React.useEffect(() => {
    bindScrollSnap()
  }, [])

  return (
    <S.Home>
      <S.HomeScrollContainer ref={container}>

        <S.FirstView><OnBoarding /></S.FirstView>
        <S.MiddleView><AboutMe /></S.MiddleView>
        <S.MiddleView><MyKnowledge /></S.MiddleView>
        <S.MiddleView><MyProjects /></S.MiddleView>
        <S.LastView><Thanks /></S.LastView>
        
      </S.HomeScrollContainer>

      <S.HomeSettings>
        {/* <S.LanguageChanger>
          <I.FiGlobe />
        </S.LanguageChanger> */}
        <S.ThemeChanger onClick={themeToggler}>
          <I.FiMoon />
        </S.ThemeChanger>
      </S.HomeSettings>
    </S.Home>
  )
}

export default Home