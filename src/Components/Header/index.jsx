import React from 'react'
import * as S from './style'
import * as I from 'react-icons/io5'

const Header = ({ aboutMeActive, toogleAboutMe }) => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <S.Logo>Henrique Garcia</S.Logo>
      </S.HeaderLogo>

      <S.HeaderNavbar>
        <S.NavbarUl>
          <S.NavbarLi onClick={() => {if(aboutMeActive) toogleAboutMe()}} active={aboutMeActive ? false : true}>home</S.NavbarLi>
          <S.NavbarLi onClick={toogleAboutMe} active={aboutMeActive ? true : false}>aboutMe</S.NavbarLi>
          {/* <S.NavbarLi active={false}>mySkills</S.NavbarLi>
          <S.NavbarLi active={false}>myProjects</S.NavbarLi> */}
        </S.NavbarUl>
      </S.HeaderNavbar>

      <S.HeaderMenu>
        <a href="https://www.99freelas.com.br/user/Henrique-Garcia-Dev" target="_blank" rel="noopener noreferrer">
          <S.InputFreelance>Freelance</S.InputFreelance>
        </a>
        <S.InputLanguage>Eng<I.IoLanguage /></S.InputLanguage>
      </S.HeaderMenu>
    </S.Header>
  )
}

export default Header