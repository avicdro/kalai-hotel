import styled from "styled-components"

export const ContainerTableList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ItemTableListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  width: 100%;
  margin: 4px 0px;
  padding: 0px 0px 0px 12px;
  border: 1px solid #eee;
`
export const NumeroItemTableList = styled.div`
  width: 30px;
  text-align: center;
`
export const ImageItemTableList = styled.img`
  width: 180px;
  height: 160px;
  margin: 0px 12px;
`
export const ImgNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const TagTipeItemTableList = styled.div`
  width: fit-content;
  height: 40px;
  padding: 0px 8px;
  text-align: center;
  line-height: 40px;

  background-color: ${({ bgcTipe, theme }) => {
    switch (bgcTipe) {
      case "simple":
        return theme.colors.primary.shadow
      case "matrimonial":
        return theme.colors.secondary.main
      case "suit":
        return theme.colors.emphasis
      default:
        break
    }
  }};

  a {
    text-decoration: none !important;
    color: white;
  }
`

export const DescBreveItemTableList = styled.div`
  width: 40%;

  @media (max-width: 990px) {
    display: none;
  }
`

export const PrecioContainerItemTableList = styled.div`
  > p {
    margin: 4px 0px;
    text-align: center;
    font-size: 18px;
  }
`
export const PrecioNumberContainer = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary.main};
  sub {
    font-size: 18px;
  }
`

export const BtnReservarItemTableList = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  transition: 300ms;
  cursor: pointer;
  display: flex;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
  :hover {
    background-color: ${({ theme }) => theme.colors.emphasis};
  }
`

// Otra seccion .------------------------------------

export const Section = styled.div`
  margin: 100px auto;
`

export const TitleSection = styled.h1`
  text-align: ${({ aling }) => (aling ? aling : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`

export const Section3 = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`
export const ContainerCardsRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;
  }
`
export const ItemCardRoom = styled.div`
  border: 0.5px solid #eee;
  border-radius: 12px;
  max-width: 32%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  
  transition: 300ms;
  overflow: hidden;
  margin: 24px 0px;
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }

  @media (max-width: 675px) {
    max-width: 100%;
    border: none;
    border-radius: 0px;
  }
`
export const IntemCardRoomImg = styled.img`
  height: 64%;
  width: 100%;
  border-radius: 12px 12px 0 0;
  @media (max-width: 675px) {
    border-radius: 0px;
  }
`
export const IntemCardRoomText = styled.div`
  transition: 300ms;
  padding: 0px 8px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: -180px;
  background-color: #0000008a;
  border-radius: 8px;
  color: white;
`
export const TitleH3 = styled.h3`
  font-weight: 700;
  text-align: center;
  margin-top: 16px;
  font-size: 34px;
  font-family: "BitterPro_B";
`

export const DescHabitaciones = styled.p`
  padding: 0px 12px;
`

export const VerMasBtn = styled.div`
  text-align: center;
  /* font-size: 16px; */
  width: 100%;
  color: #8782ff;
`
export const ContainerDetallesCosto = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
  margin: 32px 0px 0 0;
  
  >div, >a {
    width: 50%;
    height:100%;
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  >a:hover {
    color: #8782ff;
  }
  >div {
    background-color: #8782ff;
    color: white; 
  }
`


export const CloseModalBtn = styled.div`
  width: fit-content;
  float: right;
  padding: 0;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #aeaeae;
  }
`
