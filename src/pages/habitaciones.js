import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { connect } from "react-redux"
import { reservarHabitacionOperation } from "../../redux/operations/habitaciones"

import Modal from "react-modal"
import FormReserva from "../components/moleculas/FormReserva/FormReserva"
import FormLogin from "../components/moleculas/FormLogin"
import {
  BtnReservarItemTableList,
  ContainerCardsRoom,
  ContainerTableList,
  DescBreveItemTableList,
  DescHabitaciones,
  ImageItemTableList,
  ImgNumberContainer,
  IntemCardRoomImg,
  IntemCardRoomText,
  ItemCardRoom,
  ItemTableListContainer,
  NumeroItemTableList,
  PrecioContainerItemTableList,
  PrecioNumberContainer,
  Section,
  Section3,
  TagTipeItemTableList,
  TitleH3,
  TitleSection,
  VerMasBtn,
  CloseModalBtn,
  ContainerDetallesCosto,
} from "../Styled-component/styledHabitaciones"

import SEO from "../components/seo"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: "200",
  },
}

const HabitacionesPage = props => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [typeSelected, settypeSelected] = useState("Individual")
  const [isLogin, setIsLogin] = useState(props.isLogin)

  useEffect(() => {
    if (isLogin !== props.isLogin) {
      setIsLogin(props.isLogin)
    }
  })

  function openModal(type) {
    setIsOpen(true)
    settypeSelected(type)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <SEO title="Todas las habitaciones" />
      <Section3>
        <ContainerCardsRoom>
          <ItemCardRoom>
            <IntemCardRoomImg src="/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG" />
            <IntemCardRoomText>
              <TitleH3> Individual </TitleH3>
              <p>
                Las habitaciones individual son las más sencillas pero muy
                cómodas y agradables, algunas de ellas tienen vista parcial al
                mar.
              </p>
            </IntemCardRoomText>
            <PrecioContainerItemTableList>
              <p>Por noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionIndividual.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>

            <ContainerDetallesCosto>
              <Link to="/habitacion-individual/">
                <VerMasBtn>Ver detalles</VerMasBtn>
              </Link>
              <div onClick={() => openModal("Individual")}>Reservar</div>
            </ContainerDetallesCosto>


          </ItemCardRoom>
          <ItemCardRoom>
            <IntemCardRoomImg src="/habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG" />
            <IntemCardRoomText>
              <TitleH3> Doble </TitleH3>
              <p>
                Una habitación doble es un pequeño rincón privado para
                disfrutar, en el que la tranquilidad y la intimidad son como las
                del hogar.
              </p>
            </IntemCardRoomText>
            <PrecioContainerItemTableList>
              <p>Por noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionDoble.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>

            <ContainerDetallesCosto>
              <Link to="/habitacion-doble/">
                <VerMasBtn>Ver detalles</VerMasBtn>
              </Link>
              <div onClick={() => openModal("Doble")}>Reservar</div>
            </ContainerDetallesCosto>
          </ItemCardRoom>
          <ItemCardRoom>
            <IntemCardRoomImg src="/habitaciones/habitaciones-suit/hs2.jpg" />
            <IntemCardRoomText>
              <TitleH3> Triple </TitleH3>
              <p>
                Más espacio y muebles que una habitación simple, con sofacama,
                cama matrimonial, comedor, oficina y una cocina.
              </p>
            </IntemCardRoomText>
            <PrecioContainerItemTableList>
              <p>Por noche</p>
              <PrecioNumberContainer>
                {props.habitacionData.habitacionTriple.precioUnaNoche}
                <sub>.99</sub>€
              </PrecioNumberContainer>
            </PrecioContainerItemTableList>

            <ContainerDetallesCosto>
              <Link to="/habitacion-triple/">
                <VerMasBtn>Ver detalles</VerMasBtn>
              </Link>
              <div onClick={() => openModal("Triple")}>Reservar</div>
            </ContainerDetallesCosto>
          </ItemCardRoom>
        </ContainerCardsRoom>
      </Section3>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseModalBtn onClick={closeModal}>X</CloseModalBtn>

        {isLogin ? (
          <FormReserva typeSelected={typeSelected} />
        ) : (
          <>
            <h3>
              Debe de estar registrado para poder reservar 
            </h3>
            <FormLogin contextSite="fuera" />
          </>
        )}
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  habitacionData: state.habitacionesReducer.habitacionData,
  isLogin: state.loginRegisterUser.isLogin,
})

const mapDispatchToProps = dispath => ({
  reservarHabitacion: data => {
    dispath(reservarHabitacionOperation(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HabitacionesPage)
