import styled from "styled-components";

export const InProgress = styled.div`
  width: 100%;
  height: 100vh;  

  .in_progress__bg__color {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.body};
  }

  .in_progress__bg__video {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.35;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .in_progress__content {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 20px;

    color: ${props => props.theme.font_color};

    h1 {
      font-size: 44px;
      margin-bottom: 40px;
    }

    p {
      font-size: 14px;
    }
  }

  @keyframes dotFloating {
    0% {
      left: calc(-50% - 5px);
    }
    75% {
      left: calc(50% + 105px);
    }
    100% {
      left: calc(50% + 105px);
    }
  }

  @keyframes dotFloatingBefore {
    0% {
      left: -50px;
    }
    50% {
      left: -12px;
    }
    75% {
      left: -50px;
    }
    100% {
      left: -50px;
    }
  }

  @keyframes dotFloatingAfter {
    0% {
      left: -100px;
    }
    50% {
      left: -24px;
    }
    75% {
      left: -100px;
    }
    100% {
      left: -100px;
    }
  }

  .dot-floating {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-bottom: 30px;

    background-color: ${props => props.theme.variant};
    color: ${props => props.theme.variant};
    animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
  }

  .dot-floating::before, .dot-floating::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  .dot-floating::before {
    left: -12px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.variant};
    color: ${props => props.theme.variant};
    animation: dotFloatingBefore 3s infinite ease-in-out;
  }

  .dot-floating::after {
    left: -24px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.variant};
    color: ${props => props.theme.variant};
    animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
  transition: .2s;

  color: ${props => props.theme.font_color};
  background-color: ${props => props.theme.elements_light};

  svg {
    font-size: 17px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: ${props => props.theme.elements_dark};
  }
`