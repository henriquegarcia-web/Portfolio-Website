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

export const View = styled(Page)`
  height: 100%;
  min-height: 100%;
`
