import React, { useRef } from 'react'
import * as S from './style'
// import * as I from 'react-icons/fi'

import createScrollSnap from 'scroll-snap'

import OnBoarding from './Views/OnBoarding'
import AboutMe from './Views/AboutMe'
import MySkills from './Views/MySkills'
import MyProjects from './Views/MyProjects'
import Thanks from './Views/Thanks'

const Home = () => {

  // const [currentView, setCurrentView] = useState('home')

  // --------------------------------------------------

  const container = React.createRef()

  const bindScrollSnap = () => {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '100%',
    }, () => {})
  }

  React.useEffect(() => {
    bindScrollSnap()
  }, [])

  // --------------------------------------------------

  const onBoardingRef = useRef()
  const aboutMeRef = useRef()
  const mySkillsRef = useRef()
  const myProjectsRef = useRef()
  const thanksRef = useRef()

  // function goToRef(ref, view) {
  //   ref.current.scrollIntoView({ behavior: 'smooth' })
  //   if (!view || view === '') return
  //   setCurrentView(view)
  // }

  return (
    <S.Home>
      <S.HomeScrollContainer ref={container}>

        <S.FirstView ref={onBoardingRef}><OnBoarding /></S.FirstView>
        <S.MiddleView ref={aboutMeRef}><AboutMe /></S.MiddleView>
        <S.MiddleView ref={mySkillsRef}><MySkills /></S.MiddleView>
        <S.MiddleView ref={myProjectsRef}><MyProjects /></S.MiddleView>
        <S.LastView ref={thanksRef}><Thanks /></S.LastView>

      </S.HomeScrollContainer>
    </S.Home>
  )
}

export default Home