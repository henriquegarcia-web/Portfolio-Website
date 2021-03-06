import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
// import * as I from 'react-icons/fi'

const MySkills = () => {
  return (
    <S.MyKnowledge>
      <G.LeftContainer width='45'>
        <G.Section>
          <G.SectionTitle>MAIN SKILLS</G.SectionTitle>
        </G.Section>
      </G.LeftContainer>
      <G.RightContainer width='55'>
        <G.Section>
          <G.SectionTitle>INTERMEDIATE SKILLS</G.SectionTitle>
        </G.Section>

        <G.Section> 
          <G.SectionTitle>LEARNING SKILLS</G.SectionTitle>
        </G.Section>
      </G.RightContainer>
    </S.MyKnowledge>
  )
}

export default MySkills



// const FluentSkills = [
//   'JavaScript',
//   'HTML, CSS, Less & Sass',
//   'Metodologias Ágeis',
//   'Adobe XD',
//   'Twig',
//   'JSON',
//   'Linux',
//   'Versionamento Git',
//   'Web Design',
//   'Bitbucket',
// ]

// const IntermediateSkills = [
//   'React',
//   'React Native',
//   'Styled Components',
//   'React Hooks',
//   'Bootstrap',
//   'Material UI',
//   'Firebase',
//   'Consumação de APIs',
//   'Web Services',
//   'PHP Web',
//   'Testes & Depuração',
//   'UX & UI',
//   'SEO',
// ]

// const LearningTechnologies = [
//   'TypeScript',
//   'AJAX',
//   'Redux',
//   'SQL',
//   'Next.JS',
//   'Docker',
//   'JQuery',
//   'Node.JS',
//   'Grunt',
//   'Gulp',
// ]