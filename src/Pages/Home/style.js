import styled from "styled-components";
import { Page } from '../../Utils/globals'

export const Home = styled.div`

`

export const HomeScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.body};
`

export const FirstView = styled(Page)`
  height: 95%;
  min-height: 95%;
`

export const MiddleView = styled(Page)`
  height: 90%;
  min-height: 90%;

  &:nth-of-type(2), &:nth-of-type(4) {
    background-color: ${props => props.theme.body_variant};
  }
`

export const LastView = styled(Page)`
  height: 95%;
  min-height: 95%;
`

// --------------------------------------- SETTINGS

export const HomeSettings = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  width: fit-content;
  padding: 10px;
  margin: 10px 20px 0 0;
  border-radius: 8px;

  /* border: 2px solid black; */
`

export const LanguageChanger = styled.div`
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: ${props => props.theme.elements_light};
  transition: .2s;

  svg {
    transition: .2s;
    font-size: 19px;

    color: ${props => props.theme.font_color};
  }

  &:hover {
    background-color: ${props => props.theme.elements_dark};
  }
`

export const ThemeChanger = styled(LanguageChanger)`
  margin-right: 0;
`