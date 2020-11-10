import styled  from "styled-components"

export const Section = styled.div`
  width: 100%;
  padding: 4vw 0px;
`
export const ContainerTexto = styled.div`
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 860px) {
    max-width: 100%;
    padding: 0px 8px;
    position: static;
    height: auto;
    z-index: 0;
  }
`

export const ContainerImages = styled.div`
  width: 100%;
  text-align: center;
`
export const ImageHead = styled.img`
  width: 33.3333%;
  padding: 4px;
  @media (max-width: 860px) {
  }
`

export const TitleRoom = styled.h1`
  font-size: 54px;
  color: black;
`

export const DescRoom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 20px;
  p {
    font-size: 24px;
    width: 55%;
    padding: 0 12px;
  }
  ul {
    width: 40%;
    margin: 0px 0 0 5%;
    font-size: 15.4px;
    line-height: 1;
    color: #464646;
    .float-left {
      float: left;
    }
    .float-right {
      float: right;
    }
    li {
      width: 48%;
      margin: 6px 0px;
      display: inline-block;
    }
  }
  @media (max-width: 1042px) {
    & {
      flex-direction: column;
      p {
        width: 100%;
      }
      ul {
        width: 100%;
      }
    }
  }
`

export const BtnReserve = styled.div`
  padding: 12px 94px;
  font-size: 18px;
  color: white;
  display: block;
  width: fit-content;
  background-color: #007aff;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  @media (max-width: 500px) {
    & {
      text-align: center;
      width: 100%;
    }
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

export const ContainerbtnReserva = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 40px;
  >div {
    margin: 6px;
  }
  .precio-la-noche {
    font-size: 24px;
    margin-right: 16px;
    font-weight: bold;
  }
`
