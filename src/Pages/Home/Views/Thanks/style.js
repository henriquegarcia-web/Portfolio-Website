import styled from "styled-components";

export const Thanks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`

export const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ThanksText = styled.div`
  width: 50%;

  h2 {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: right;
    width: 60%;
    margin: 0 20px 20px auto;
    padding-right: 15px;

    color: ${props => props.theme.font_color};
    border-right: 4px solid ${props => props.theme.font_color};
  }
`

export const ThanksImage = styled.div`
  width: 50%;
`

export const Image = styled.img`
  width: 280px;
  margin-left: 20px;

  filter: drop-shadow(0 0 20px ${props => props.theme.elements_dark});
`

// ----------------------------------------- LINKS

export const PersonalLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 0 0;
  padding-right: 15px;

  border-right: 4px solid ${props => props.theme.font_color};
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 8px;
  cursor: pointer;
  transition: .2s;

  background-color: ${props => props.theme.elements_dark};

  svg {
    font-size: 18px;

    color: ${props => props.theme.font_color};
  }

  &:hover {
    background-color: ${props => props.theme.elements_light};
  }

  &:last-of-type {
    margin-right: 0;
  }
`