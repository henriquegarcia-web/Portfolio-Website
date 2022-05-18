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
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: right;
    width: 70%;
    margin: 0 20px 0 auto;
    padding-right: 15px;

    color: ${props => props.theme.font_color};
    border-right: 4px solid ${props => props.theme.font_color};
  }
`

export const ThanksImage = styled.div`
  width: 50%;
`

export const Image = styled.img`
  width: 260px;
  margin-left: 20px;

  filter: drop-shadow(0 0 20px ${props => props.theme.elements_dark});
`