import React from 'react'
import * as S from './style'
import * as I from 'react-icons/io5'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <S.Logo>Henrique Garcia</S.Logo>
      </S.HeaderLogo>

      <S.HeaderNavbar>
        <S.NavbarUl>
          <S.NavbarLi active={true}>home</S.NavbarLi>
          <S.NavbarLi active={false}>aboutMe</S.NavbarLi>
          <S.NavbarLi active={false}>mySkills</S.NavbarLi>
          <S.NavbarLi active={false}>myProjects</S.NavbarLi>
        </S.NavbarUl>
      </S.HeaderNavbar>

      <S.HeaderMenu>
        <S.InputFreelance>Freelance</S.InputFreelance>
        <S.InputLanguage>Eng<I.IoLanguage /></S.InputLanguage>
      </S.HeaderMenu>
    </S.Header>
  )
}

export default Header