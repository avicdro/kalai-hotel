import styled, { keyframes, css } from "styled-components"

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: 300ms background-color;
  margin-bottom: 20px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 10;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ isMobile }) => (isMobile ? "98%" : "90%")};
  padding: ${({ isMobile }) => (isMobile ? "4px 12px" : "8px 0px")};
  margin: 0 auto;
`
export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "BitterPro_B";
  a {
    display: block;
    margin: 0px 12px;
    text-decoration: none;
    color: rgba(54, 73, 89, 1);
    transition: 300ms;
    padding: 12px 0px;
    &:hover {
      opacity: 0.6;
    }
  }
  .nav_perfil_container {
    position: relative;
    .nav_perfil_hover_datos {
      position: absolute;
      top: 100%;
      display: none;
      right: 0px;
      color: rgba(54, 73, 89, 1);

      > div {
        background-color: ${({ theme }) => theme.colors.primary.main};
        padding: 16px 18px;
        width: 200px;
        cursor: pointer;
        a {
          margin: 0px;
          padding: 0px;
          &:hover {
            opacity: 1;
          }
        }
        &:hover {
          background-color: #f2e05c;
        }
        &:first-child {
          background-color: white;
          text-align: center;
          border: 5px solid #f2e05c;
        }

      }
      &:hover {
        display: block;
      }
    }
    .nav_perfil:hover + .nav_perfil_hover_datos {
      display: block;
    }
  }

  @media (max-width: 880px) {
    font-size: 14px;
  }
  @media (max-width: 820px) {
    font-size: 13px;
  }
  ${({ isMobile, isOpenBurgerMenu, theme }) =>
    isMobile
      ? `
    position: fixed;
    flex-direction: column;
    height: 93.5vh;
    font-size: 21px !important;
    top: 48px;
    transition: 500ms;
    width: 50vw;
    left: ${isOpenBurgerMenu ? "50%" : "100%"};
    right: 0px;
    .nav_perfil_container {
      width: 100%;
      height: 100%; 
      margin: 0px;
      >a {margin: 0px}
    }
    a {
      background-color: ${theme.colors.primary.main};
      width: 100%;
      height: 100%; 
      padding: 12px 0px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 1;
        color: rgb(72, 72, 72);;
        background-color: rgba(239, 232, 87, 1);;
      }
    }

    @media (max-width: 330px){
      width: 100vw;
      left: ${isOpenBurgerMenu ? "0px" : "100vw"};
    }
  `
      : ""};
`

export const Logo = styled.svg`
  width: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  border: 2px solid rgba(54, 73, 89, 1);
  padding: 4px;
  border-radius: 50%;
  fill: rgba(54, 73, 89, 1);
  path {
    transform: translateX(-2.7px);
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    display: contents;
    color: white;
  }
`
export const LogoExtendido = styled.p`
  display: inline-block;
  color: rgba(54, 73, 89, 1);
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "19px")};
  transition: 300ms color;
  font-family: "Archive", "BitterPro_B", sans-serif;
  line-height: 1.1;
  margin: 0px 4px;
  

`
export const BurgerMenuContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
  width: 34px;
  height: 100%;
  cursor: pointer;
`

export const animaL1 = keyframes` 
  0% {transform: translateY(0) rotate(0deg);}
  100% {transform: translateY(8px) rotate(45deg);}
`
export const animaL2 = keyframes` 
  0%{ transform: scale(0);opacity: 0;}
  100%{ transform: scale(1); opacity: 1;}
`
export const animaL3 = keyframes`
  0% {transform: translateY(0) rotate(0deg);}
  100% {transform: translateY(-8px) rotate(-45deg);}
`
export const animaL1Re = keyframes` 
  0% {transform: translateY(8px) rotate(45deg);}
  100% {transform: translateY(0) rotate(0deg);}
`
export const animaL2Re = keyframes` 
  0%{ transform: scale(1); opacity: 1;}
  100%{transform: scale(0);opacity: 0;}
`
export const animaL3Re = keyframes`
  0% {transform: translateY(-8px) rotate(-45deg);}
  100% {transform: translateY(0) rotate(0deg);}
`

export const LineTopBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);
  ${({ isOpenBurgerMenu }) =>
    isOpenBurgerMenu
      ? css`
          animation: ${animaL1} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL1Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`
export const LineBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);

  transition: 300ms;
  ${({ isOpenBurgerMenu }) =>
    !isOpenBurgerMenu
      ? css`
          animation: ${animaL2} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL2Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`
export const LineBottomBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);
  ${({ isOpenBurgerMenu }) =>
    isOpenBurgerMenu
      ? css`
          animation: ${animaL3} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL3Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`
