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
  
  &:hover {
    img {
      filter: blur(3px);
      opacity: 0.7;
    }

    .details {
      display: flex;
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
  cursor: pointer;
  transition: .2s;  
`

export const ProjectDetails = styled.div`
  z-index: 2;
  position: absolute;
  display: none;
  flex-direction: column;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 15px;
  /* pointer-events: none; */
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
  width: 50%;
  font-size: 13px;
  font-weight: 500;

  color: ${props => props.theme.font_color};
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
`