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
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  transition: .2s;

  svg {
    transition: .2s;
    font-size: 18px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const ThemeChanger = styled(LanguageChanger)`
  margin-right: 0;
`