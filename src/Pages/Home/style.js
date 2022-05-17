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
