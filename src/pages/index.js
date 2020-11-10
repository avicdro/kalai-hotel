import React  from "react"
import SEO from "../components/seo"

import { FormSearchRoom } from "../components/moleculas"

import styled from "styled-components"
import { Link } from "gatsby"


const ImagePortada = styled.img`
  width: 100%;
  height: 100%;
  max-width: inherit;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: auto;
  }

`
const Section1 = styled.div`
  display: flex;
  height: 870px;
  position: relative;
  overflow: hidden;
  .container-form-search {
    position: absolute;
    right: 0px;
    left: 0px;
    top: 100px;
    padding: 0px 4vw;
  }

  @media (max-width: 700px) {
    height: 700px;
    .container-form-search {
      padding: 0px 8px;
      top: 20px;
    }
  }
  
`

const Section3 = styled.div`
  text-align: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 80px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .texto-desc {
    max-width: 500px;
    margin: 20px;
  }

  @media (max-width: 1285px) {
    &:last-child {
      align-items: center;
      flex-direction: column-reverse;
    }
  }

`

const ContainerCardsRoom = styled.div`
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
const ItemCardRoom = styled.div`
  border: 0.5px solid #eee;
  border-radius: 12px;
  max-width: 384px;
  height: 700px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 12px -8px black;
  cursor: pointer;
  transition: box-shadow 300ms;
  overflow: hidden;
  margin: 24px 0px;
  &:hover {
    box-shadow: 0 0px 51px -41px black;
    img {
      transform: scale(1.03);
    }
    > div {
      margin-top: 8px;
    }
  }

  @media (max-width: 675px) {
    max-width: 100%;
    border: none;
    border-radius: 0px;
  }
`
const IntemCardRoomImg = styled.img`
  transition: 300ms;
  height: 64%;
  width: 100%;
  border-radius: 12px 12px 0 0;

  @media (max-width: 675px) {
    border-radius: 0px;
  }
`
const IntemCardRoomText = styled.div`
  transition: 300ms;
  padding: 0px 12px;
`
const TitleH3 = styled.h3`
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 700;
  text-align: center;
  margin-top: 16px;
`
const TitleSection = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 900;
  text-align: center;
  margin-top: 70px;
  font-size: 52px;
  padding: 0 5px;
  @media (max-width: 675px) {
    font-size: 42px;
  }
`
const DescHabitaciones = styled.p`
  padding: 0px 12px;
  text-align: left;
  font-size: 21px;
  a {
    text-decoration: none;
    color: #8782ff;
    display: inline-block;
    margin-left: 8px;
    font-size: 20px;
  }
`
const VerMasBtn = styled.p`
  text-align: center;
  font-size: 17px;
  margin-top: 52px;
  width: 100%;
  color: #8782ff;
`

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Section1>
        <div className="container-form-search">
          <FormSearchRoom />
        </div>
        <ImagePortada
          src="./portada/habitacion-desayuno.jpg"
          alt="fondo portada"
        />
      </Section1>

      <Section3>
        <div className="texto-desc">
          <TitleSection>Habitaciones</TitleSection>
          <DescHabitaciones>
            <strong>Moderno</strong>, <strong>acogedor</strong>,{" "}
            <strong>familiar</strong>, <strong>cálido</strong>, tal vez son
            algunas de palabras que nos describen mejor. <br />
            Disponemos de XX habitaciones simples, xx habitaciones dobles, xx
            suits, todas con su comedor, baño, acondicionadas con: aire
            acondicionado, nevera, agua caliente, caja de seguridad (opcional).
             <Link to="/habitaciones">
              Ver más
             </Link>
          </DescHabitaciones>
        </div>
        <div className="img">
          <picture>
            <source media="(min-width: 800px)" srcset="./portada/Collage_habitaciones_v2_horizontal.png"/>
            <img src="./portada/Collage_habitaciones_v2_vertical.png" alt="habitaciones collague"/>
          </picture>
        </div>
      </Section3>
      <Section3>
        <div className="img">
        <picture>
          <source media="(min-width: 600px)" srcset="./portada/Collage_servicios_v2_horizontal.png"/>
          <img src="./portada/Collage_servicios_v2_vertical.png" alt="servicios collague"/>
        </picture>

        </div>
        <div className="texto-desc">
          <TitleSection>Servicios </TitleSection>
          <DescHabitaciones>
            Contamos con una amplia variedad, con el fin de proveer todo lo que pueda necesitar, <b>comodidad</b>,  <b>espacios</b>, <b>entretenimiento</b>, <b>comida</b> y <b>bebida</b>. 
            <Link to="/servicios">
             Ver más
            </Link>
          </DescHabitaciones>
        </div>
      </Section3>
    </>
  )
}

export default IndexPage
