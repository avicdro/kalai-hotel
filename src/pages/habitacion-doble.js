import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import SEO from "../components/seo"

import Modal from "react-modal"
import FormReserva from "../components/moleculas/FormReserva/FormReserva"
import FormLogin from "../components/moleculas/FormLogin"

import { descGeneralTipoHabitacion } from "../logic/DB/DatosHotel"
import {
  Section,
  BtnReserve,
  ContainerTexto,
  DescRoom,
  ImageHead,
  TitleRoom,
  CloseModalBtn,
  ContainerbtnReserva
} from "../Styled-component/styledHabitacion"

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

Modal.setAppElement("#___gatsby")


const HabitacionDoblePage = props => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(props.isLogin)
  
  useEffect(() => {
    if (isLogin !== props.isLogin) {
      setIsLogin(props.isLogin)
    }
  })

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <SEO title="Habitación Doble" />
      <Section>
        <ContainerTexto>
          <TitleRoom>{descGeneralTipoHabitacion.doble.title}</TitleRoom>
          <DescRoom>
            <p>{descGeneralTipoHabitacion.doble.descLarga}</p>
            <ul>
              {descGeneralTipoHabitacion.doble.caracteristicas.map(
                (dato, index) => {
                  return (
                    <li
                      className={index % 2 == 0 ? "float-left" : "float-right"}
                    >
                      {dato}
                    </li>
                  )
                }
              )}
            </ul>
          </DescRoom>
          <ContainerbtnReserva>
            <div className="precio-la-noche">La noche {descGeneralTipoHabitacion.doble.precioUnaNoche}€</div>
            <BtnReserve onClick={() => openModal()}> Reservar </BtnReserve>
          </ContainerbtnReserva>
        </ContainerTexto>
        <ImageHead
          src="/habitaciones/habitaciones-simple-matrimonial/hsm1-baño.JPG"
          alt="Image"
        />
        <ImageHead
          src="/habitaciones/habitaciones-simple-matrimonial/hsm2-camaVentana.JPG"
          alt="Image"
        />
        <ImageHead
          src="/habitaciones/habitaciones-simple-matrimonial/hsm3-cama.JPG"
          alt="Image"
        />
      </Section>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseModalBtn onClick={closeModal}>X</CloseModalBtn>

        {isLogin ? (
          <FormReserva typeSelected={"Doble"} />
        ) : (
          <>
            <h3>
              Lo lamento debe de estar registrado para realizar esta operación
            </h3>
            <FormLogin contextSite="fuera" />
          </>
        )}
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  isLogin: state.loginRegisterUser.isLogin,
})

export default connect(mapStateToProps,null)(HabitacionDoblePage)
