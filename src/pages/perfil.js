import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { connect } from "react-redux"
import { cerrarSesion } from "../../redux/operations/loginRegisterUser"
import moment from "moment"

import {
  BtnCerrarSesion,
  ContainerDatosPerfil,
  ContainerPerfilHeader,
  ContainerTableList,
  DescBreveItemTableList,
  IdentificacionUsuario,
  ImageItemTableList,
  ImgNumberContainer,
  ImgPerfil,
  ItemTableListContainer,
  NumeroDeReserva,
  NumeroItemTableList,
  PrecioContainerItemTableList,
  PrecioNumberContainer,
  Section,
  TagTipeItemTableList,
  TitleSection,
  ContainerPerfilPage,
} from "../Styled-component/styledPerfil"

const PerfilPage = props => {
  return (
    <>
      <SEO title="Perfil de usuario" />
      <ContainerPerfilPage>
        <ContainerPerfilHeader>
          <ImgPerfil src="/perfil/usuario2.png" alt="Img_user_define" />
          <ContainerDatosPerfil>
            <IdentificacionUsuario>
              <div>Huésped</div>
              <span>{props.mailUser}</span>
            </IdentificacionUsuario>
            <BtnCerrarSesion onClick={() => props.cerrarSesion()}>
              Cerrar sesión
            </BtnCerrarSesion>
          </ContainerDatosPerfil>
        </ContainerPerfilHeader>

        <Section>
          <TitleSection aling={"left"} fontSize="32px">
            Mis Reservas
          </TitleSection>

          <ContainerTableList>
            <ItemTableListContainer>
              <NumeroItemTableList>Número</NumeroItemTableList>
              <div className="tag-column">Tag</div>
              <div>Tiempo</div>
              <div>Coste</div>
              <div>Número de reserva</div>
            </ItemTableListContainer>

            {props.listaReservas &&
              props.listaReservas.length > 0 &&
              props.listaReservas.map((habitacion, index) => (
                <ItemTableListContainer key={index + "_" + habitacion.type}>
                  <NumeroItemTableList>
                    {habitacion.numberIdHabitacion}
                  </NumeroItemTableList>
                  <TagTipeItemTableList className="tag-column" bgcTipe={habitacion.type}>
                    <Link to={"/habitacion-" + habitacion.type.toLowerCase()}>
                      {habitacion.type}
                    </Link>
                  </TagTipeItemTableList>
                  <DescBreveItemTableList>
                    {moment(habitacion.initialDate).format("DD/MM/YYYY")}
                    <br />
                    {moment(habitacion.finalDate).format("DD/MM/YYYY")}
                    <div>
                      <span>Dias:</span>
                      {" " + habitacion.cantDates}
                    </div>
                  </DescBreveItemTableList>
                  <PrecioContainerItemTableList>
                    <PrecioNumberContainer>
                      {habitacion.finalCost}
                      <sub>.99</sub>€
                    </PrecioNumberContainer>
                  </PrecioContainerItemTableList>
                  <NumeroDeReserva>
                    {habitacion.numberRefReserva}
                  </NumeroDeReserva>
                </ItemTableListContainer>
              ))}
          </ContainerTableList>
        </Section>
      </ContainerPerfilPage>
    </>
  )
}

const mapStateToProps = state => ({
  mailUser: state.loginRegisterUser.userLogin.mail,
  listaReservas: state.habitacionesReducer.habitacionesReservadas,
  habitacionDataType: state.habitacionesReducer.habitacionData,
})

const mapDispatchToProps = dispath => ({
  cerrarSesion: () => {
    dispath(cerrarSesion())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PerfilPage)
