import styled from "styled-components";

export const MyKnowledge = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  max-width: 1000px;
  height: 100%;

  /* border: 2px solid red; */
`

export const MyKnowledgeContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  padding: 15px;
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% / 3);
`

export const SkillsContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  h3 {
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.font_color};
  }

  b {
    font-weight: 300;
    font-size: 12px;
    margin-top: 4px;
  }

  svg {
    margin-right: 10px;
    font-size: 22px;
  }
`

export const SkillsContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SkillItem = styled.div`
  width: 260px;
  height: 110px;
  border-radius: 6px;
  margin-right: 15px;

  border: 2px solid orange;
`