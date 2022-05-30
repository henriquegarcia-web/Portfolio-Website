import styled from "styled-components";
import { Button } from "../../Utils/globals";

export const Header = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  user-select: none;

  background: ${props => props.theme.body};
  border-bottom: 1px solid ${props => props.theme.border};
`

// ------------------------------------ LOGO

export const HeaderLogo = styled.div`

`

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 400;
`

// ------------------------------------ NAVBAR

export const HeaderNavbar = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`

export const NavbarUl = styled.ul`
  display: flex;
`

export const NavbarLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding-top: 2px;
  cursor: pointer;

  font-size: 15px;
  font-weight: ${props => props.active ? '300' : '200'};
  
  border-left: 1px solid ${props => props.theme.border};
  background: ${props => props.active ? props.theme.primary : 'trasparent'};
  border-bottom: ${props => props.active ? `2px solid ${props.theme.variant}` : '2px solid transparent'};

  &:last-of-type {
    border-right: 1px solid ${props => props.theme.border};
  }

  &:hover {
    background: ${props => props.active ? props.theme.secondary : props.theme.hover};
  }
`

// ------------------------------------ MENU

export const HeaderMenu = styled.div`
  display: flex;
  margin-left: 20px;
`

export const InputFreelance = styled(Button)`
  padding: 0 12px;
`

export const InputLanguage = styled(Button)`
  padding: 0 9px;
  margin-left: 8px;
  font-size: 14px;
  border-radius: 6px;
  cursor: default;

  svg {
    font-size: 18px;
    margin-left: 5px;
  }
`