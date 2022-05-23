import styled from "styled-components";
import { Page } from '../../Utils/globals'

import HomeBg from '../../Assets/HomeBg.png'

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

  background-image: url(${HomeBg});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 760px) {
    .view__about_me, .view__my_know, .view__my_projects {
      display: none
    }

    .view__thanks {
      background-color: ${props => props.theme.body_variant};
    }
  }
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

// export const HomeSettings = styled.div`
//   z-index: 100;
//   position: fixed;
//   left: 0;
//   top: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: fit-content;
//   padding: 20px;

//   background-color: ${props => props.theme.body_variant};
// `

// export const Logo = styled.div`
//   h1 {
//     margin: 0;
//     font-size: 22px;
//     font-weight: 600;
//     letter-spacing: 0.5px;
//     color: ${props => props.theme.font_color};
//   }

//   @media screen and (max-width: 860px) {
//     h1 {
//       font-size: 20px;
//     }
//   }
// `

// export const MenuDesktop = styled.div`
//   display: flex;

//   ul {
//     display: flex;
//     margin: 0;
  
//     li {
//       display: flex;
//       margin-right: 15px;
//       font-size: 15px;
//       font-weight: 400;
//       letter-spacing: 0.5px;
//       cursor: pointer;

//       color: ${props => props.theme.font_color};
      
//       &:last-of-type {
//         margin-right: 0;
//       }
//     }
//   }

//   @media screen and (max-width: 860px) {
//     ul {
//       li {
//         font-size: 13px;
//       }
//     }
//   }

//   @media screen and (max-width: 760px) {
//     display: none;
//   }
// `

// export const ThemeChanger = styled.div`
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 32px;
//   width: 32px;
//   border-radius: 100%;
//   background-color: ${props => props.theme.elements_light};
//   transition: .2s;

//   svg {
//     transition: .2s;
//     font-size: 19px;

//     color: ${props => props.theme.font_color};
//   }

//   &:hover {
//     background-color: ${props => props.theme.elements_dark};
//   }
// `

// export const MenuMobile = styled(ThemeChanger)`
//   display: none;
//   margin: 0 10px 0 auto;

//   @media screen and (max-width: 760px) {
//     display: flex;
//   }
// `

// // ---------------------------- MOBILE MENU

// export const MobileMenu = styled.div`
//   z-index: 90;
//   position: absolute;
//   left: 0;
//   top: 0;
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   pointer-events: ${props => props.menuOpen ? 'all' : 'none'};

//   @media screen and (min-width: 760px) {
//     pointer-events: none;
//   }
// `

// export const MobileMenuContainer = styled.div`
//   position: absolute;
//   display: flex;
//   width: 230px;
//   height: 100%;
//   padding: 90px 20px 20px 20px;
//   transform: translateX(${props => props.menuOpen ? '0' : '100%'});

//   background-color: ${props => props.theme.body_variant};

//   ul {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     width: 100%;

//     li {
//       display: flex;
//       align-items: center;
//       margin-bottom: 15px;
//       font-size: 15px;
//       font-weight: 400;
//       letter-spacing: 0.5px;
//       cursor: pointer;

//       color: ${props => props.theme.font_color};
      
//       &:last-of-type {
//         margin-bottom: 0;
//       }

//       svg {
//         font-size: 18px;
//         margin-left: 8px;
//       }
//     }
//   }

//   @media screen and (min-width: 760px) {
//     transform: translateX(100%);
//   }
// `