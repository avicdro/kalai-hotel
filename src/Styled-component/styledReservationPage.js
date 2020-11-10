import styled from "styled-components"

export const Section = styled.div`
/* margin: 50px auto; */
padding: 30px 6vw;
`

export const ContainerPrinList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ItemPrinListContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 300px;
width: 100%;
margin: 4px 0px;
padding: 0;
border: 1px solid #eee;

border-radius: 12px;
overflow: hidden;
text-align: center;

@media (max-width: 600px) {
  flex-direction: column;
  height: auto;
  div {
    margin: 24px 0px; 
  }
  img{
    width: 100%;
  }

}
`
export const ImgPrinListTable = styled.img`
width: 200px;
height: 300px;
`
export const TitleSection = styled.h1`
text-align: ${({ aling }) => (aling ? aling : "center")};
font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
`
export const PrecioContainerItemTableList = styled.div`
> p {
  margin: 4px 0px;
  text-align: center;
  font-size: 18px;
}
`
export const PrecioNumberContainer = styled.div`
font-size: 48px;
font-weight: 900;
color: ${({ theme }) => theme.colors.secondary.main};
sub {
  font-size: 24px;
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
@media (max-width: 600px) {
  width: 100%;  

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
