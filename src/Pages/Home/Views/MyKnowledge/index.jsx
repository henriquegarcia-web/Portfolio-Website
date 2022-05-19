import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fi'

const MyKnowledge = () => {

  const FluentSkills = [
    
    'JavaScript',
    'HTML, CSS, Less & Sass',
    'Metodologias Ágeis',
    'Adobe XD',
    'Twig',
    'JSON',
    'Linux',
    'Versionamento Git',
    'Web Design',
    'Bitbucket',
  ]

  const IntermediateSkills = [
    'React',
    'React Native',
    'Styled Components',
    'React Hooks',
    'Bootstrap',
    'Material UI',
    'Firebase',
    'Consumação de APIs',
    'Web Services',
    'PHP Web',
    'Testes & Depuração',
    'UX & UI',
    'SEO',
  ]

  const LearningTechnologies = [
    'TypeScript',
    'AJAX',
    'Redux',
    'SQL',
    'Next.JS',
    'Docker',
    'JQuery',
    'Node.JS',
    'Grunt',
    'Gulp',
  ]

  return (
    <S.MyKnowledge>
      <G.ViewHeader>
        <div className='top_spacer'></div>
        <G.ViewHeaderIcon>💡</G.ViewHeaderIcon>
        <G.TextTitle>Meus conhecimentos</G.TextTitle>
      </G.ViewHeader>
      <G.ViewContent>
        <S.MyKnowledgeContent>

          <S.SkillsContainer>
            <S.SkillsContainerHeader>
              <G.TextSubtitle><I.FiGitPullRequest /><span>Competências fluentes <b><b>XP:</b> 2-4 anos</b></span></G.TextSubtitle>
            </S.SkillsContainerHeader>
            <S.SkillsContainerWrapper>
              {FluentSkills.map((tag) => (
                <G.Tag key={tag}>{tag}</G.Tag>
              ))}
            </S.SkillsContainerWrapper>
          </S.SkillsContainer>

          <S.SkillsContainer>
            <S.SkillsContainerHeader>
              <G.TextSubtitle><I.FiGitMerge /><span>Competências avançadas <b><b>XP:</b> 1-2 anos</b></span></G.TextSubtitle>
            </S.SkillsContainerHeader>
            <S.SkillsContainerWrapper>
              {IntermediateSkills.map((tag) => (
                <G.Tag key={tag}>{tag}</G.Tag>
              ))}
            </S.SkillsContainerWrapper>
          </S.SkillsContainer>

          <S.SkillsContainer>
            <S.SkillsContainerHeader>
              <G.TextSubtitle><I.FiGitBranch /><span>Competências em desenvolvimento<b><b>XP:</b> Até 12 meses</b></span></G.TextSubtitle>
            </S.SkillsContainerHeader>
            <S.SkillsContainerWrapper>
              {LearningTechnologies.map((tag) => (
                <G.Tag key={tag}>{tag}</G.Tag>
              ))}
            </S.SkillsContainerWrapper>
          </S.SkillsContainer>

        </S.MyKnowledgeContent>
      </G.ViewContent>
    </S.MyKnowledge>
  )
}

export default MyKnowledge