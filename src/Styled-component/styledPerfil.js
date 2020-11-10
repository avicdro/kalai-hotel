
import styled from "styled-components"


export const ContainerPerfilPage = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Section = styled.div`
  margin: 90px auto;
  width: 70%;
  @media (max-width: 640px) {
    margin: 20px auto;
    width: 90%;
  }
`

export const TitleSection = styled.h1`
  text-align: ${({ aling }) => (aling ? aling : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`

export const ContainerTableList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  min-height: 500px;
  
  @media (max-width: 800px) {
    padding: 4px;
    text-align: center;
    div {
      margin: 12px 0px;
    }
    height: auto;
  }
`
export const ItemTableListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  margin: 4px 0px;
  padding: 0px 0px 0px 12px;
  background-color: #fff;
  >div {
    width: 25%;
  }
  &:first-child {
    margin: 0px;
    height:50px;
    border: none;
    width:100%;
    user-select: none;
    cursor: pointer;
    padding: 0px;
    >div {
      height: 100%;
      line-height: 50px;
      text-align: center;
    }
    >div:hover {
      background-color: whitesmoke;
    }
  }
  
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }
  @media (max-width: 412px) {
    .tag-column {
      display: none;
     }
  }
`
export const NumeroItemTableList = styled.div`
  width: 30px;
  text-align: center;
  @media (max-width: 800px) {
    display: none;
  }
`
export const ImageItemTableList = styled.img`
  width: 180px;
  max-height: 160px;
  margin: 0px 12px;
  @media (max-width: 800px) {
    
    max-height: 300px;
  }
`
export const ImgNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const TagTipeItemTableList = styled.div`
  width: fit-content;
  height: 40px;
  padding: 0px 4px;
  text-align: center;
  line-height: 40px;
  width: 100px;
  margin: 0 16px;
  font-weight: bold;
  transition: 250ms ease-in;
  border-left: 4px solid ${({ bgcTipe, theme }) => {
    switch (bgcTipe) {
      case "Individual":
        return "rgba(239,232,87,1)"
      case "Doble":
        return theme.colors.secondary.main
      case "Triple":
        return theme.colors.emphasis
      default:
        break
    }
  }};

  a {
    text-decoration: none !important;
    color: black;
  }

  &:hover {
    border-left-width: 8px;
  }
`

export const DescBreveItemTableList = styled.div`
  width: 50%;
  font-size: 14px;
`

export const PrecioContainerItemTableList = styled.div`
  > p {
    margin: 4px 0px;
    text-align: center;
    font-size: 18px;
  }
`
export const PrecioNumberContainer = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  text-align: center;
  sub {
    font-size: 12px;
  }
`
export const NumeroDeReserva = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  margin: 0px 24px;
  text-align: center;
  div {
    font-size: 14px;
  }
`

// Header paerfil
export const ContainerPerfilHeader = styled.div`
  display: flex;
  padding: 40px 8px;
  min-height: 300px;
  width: 25%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const ImgPerfil = styled.img`
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.emphasis};
`
export const ContainerDatosPerfil = styled.div`
  padding: 12px;
`
export const IdentificacionUsuario = styled.div`
  span {
    color: ${({ theme }) => theme.colors.secondary.shadow};
    padding: 4px 0;
    font-weight: 900;
  }
`
export const BtnCerrarSesion = styled.div`
  font-size: 12.5px;
  cursor: pointer;
  transition: 300ms;
  margin: 8px 0px;
  padding: 12px;
  :hover {
    color: red;
    opacity: 0.6;
  }
`
