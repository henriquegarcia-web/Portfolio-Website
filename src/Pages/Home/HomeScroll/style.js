import styled from "styled-components";

import { Page } from '../../../globalStyles'

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

export const FirstPage = styled(Page)`
  height: 95%;
  min-height: 95%;
`

export const MiddlePage = styled(Page)`
  height: 90%;
  min-height: 90%;
`

export const LastPage = styled(Page)`
  height: 95%;
  min-height: 95%;
`
