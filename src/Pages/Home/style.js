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
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 20px;

  background-color: ${props => props.theme.body_variant};
`

export const Logo = styled.div`
  

  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${props => props.theme.font_color};
  }
`

export const Menu = styled.div`
  display: flex;

  ul {
    display: flex;
    margin: 0;
  
    li {
      display: flex;
      margin-right: 15px;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.5px;
      cursor: pointer;

      color: ${props => props.theme.font_color};
      
      &:last-of-type {
        margin-right: 0;
      }
    }

  }
`

export const ThemeChanger = styled.div`
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