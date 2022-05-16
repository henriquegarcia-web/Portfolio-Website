import React from 'react'
import * as S from './style'

import createScrollSnap from 'scroll-snap'

const HomeScroll = () => {

  const container = React.createRef()

  const bindScrollSnap = () => {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '90%',
    }, () => console.log('snapped'))
  }

  React.useEffect(() => {
    bindScrollSnap()
  }, [])

  return (
    <S.HomeScrollContainer ref={container}>

      <S.FirstPage>

      </S.FirstPage>

      <S.MiddlePage>

      </S.MiddlePage>

      <S.MiddlePage>

      </S.MiddlePage>

      <S.MiddlePage>

      </S.MiddlePage>

      <S.LastPage>

      </S.LastPage>

    </S.HomeScrollContainer>
  )
}

export default HomeScroll