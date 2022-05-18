import styled from "styled-components";

export const MyProjects = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  max-width: 1000px;
  height: 100%;

  /* border: 2px solid red; */
`

export const MyProjectsContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px 15px 30px 15px;
`

export const ProjectContainer = styled.div`
  position: relative;
  cursor: pointer;
  
  &:hover {
    img {
      filter: blur(5px);
      opacity: 0.5;
    }

    .details {
      opacity: 1;
    }
  }
`

export const ProjectImageContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;  
`

export const ProjectDetails = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  opacity: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 15px;
  transition: .2s; 
`

export const ProjectTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 10px;

  color: ${props => props.theme.font_color};
`

export const ProjectLinks = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  width: calc(50% -  7.5px);
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  padding: 4px 8px;
  transition: .2s; 

  color: ${props => props.theme.font_color};
  background-color: ${props => props.theme.elements_light};

  svg {
    font-size: 16px;
    margin-right: 5px;
    letter-spacing: 0.5px;
  }

  &:hover {
    color: ${props => props.theme.font_color};
    background-color: ${props => props.theme.elements_dark};
    text-decoration: none;
  }

  &:nth-of-type(1) {
    margin-right: 7.5px;
  }

  &:nth-of-type(2) {
    margin-left: 7.5px;
  }
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;

  div {
    padding: 3px 10px;
    font-size: 12px;
    margin: 0 6px 6px 0;
  }
`