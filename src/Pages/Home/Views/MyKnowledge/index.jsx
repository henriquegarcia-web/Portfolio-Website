import React from 'react'
import * as G from '../../../../Utils/globals'
import * as S from './style'
import * as I from 'react-icons/fi'

const MyKnowledge = () => {

  const FluentSkills = [
    
    {tag: 'JavaScript'},
    {tag: 'HTML, CSS, Less & Sass'},
    {tag: 'Metodologias Ágeis'},
    {tag: 'Adobe XD'},
    {tag: 'Twig'},
    {tag: 'JSON'},
    {tag: 'Linux'},
    {tag: 'Versionamento Git'},
    {tag: 'Web Design'},
  ]

  const IntermediateSkills = [
    {tag: 'React'},
    {tag: 'React Native'},
    {tag: 'Styled Components'},
    {tag: 'React Hooks'},
    {tag: 'Bootstrap'},
    {tag: 'Material UI'},
    {tag: 'Firebase'},
    {tag: 'Consumação de APIs'},
    {tag: 'Web Services'},
    {tag: 'PHP'},
    {tag: 'Testes'},
    {tag: 'UX & UI'},
    {tag: 'SEO'},
  ]

  const LearningTechnologies = [
    {tag: 'TypeScript'},
    {tag: 'AJAX'},
    {tag: 'Redux'},
    {tag: 'SQL'},
    {tag: 'Next.JS'},
    {tag: 'Docker'},
    {tag: 'JQuery'},
    {tag: 'Node.JS'},
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
              {FluentSkills.map(({ tag }) => (
                <G.Tag key={tag}>{tag}</G.Tag>
              ))}
            </S.SkillsContainerWrapper>
          </S.SkillsContainer>

          <S.SkillsContainer>
            <S.SkillsContainerHeader>
              <G.TextSubtitle><I.FiGitMerge /><span>Competências avançadas <b><b>XP:</b> 1-2 anos</b></span></G.TextSubtitle>
            </S.SkillsContainerHeader>
            <S.SkillsContainerWrapper>
              {IntermediateSkills.map(({ tag }) => (
                <G.Tag key={tag}>{tag}</G.Tag>
              ))}
            </S.SkillsContainerWrapper>
          </S.SkillsContainer>

          <S.SkillsContainer>
            <S.SkillsContainerHeader>
              <G.TextSubtitle><I.FiGitBranch /><span>Competências em desenvolvimento<b><b>XP:</b> Até 12 meses</b></span></G.TextSubtitle>
            </S.SkillsContainerHeader>
            <S.SkillsContainerWrapper>
              {LearningTechnologies.map(({ tag }) => (
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