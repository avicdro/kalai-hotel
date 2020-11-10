import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const TituloEventos = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.main};
`
const CarouselContainer = styled.div``
const ItemCarouselStyled = styled.div`
  margin: 0 auto;
  img {
    max-height: 625px;
  }
`

export const sliderEventos = () => (
  <Section2>
    <TituloEventos>Eventos en nuestro hotel</TituloEventos>
    <CarouselContainer>
      <Carousel
        interval={8000}
        transitionTime={1000}
        showStatus={false}
        width="100%"
        showArrows
        swipeable
        autoPlay
        infiniteLoop
        useKeyboardArrows
      >
        <ItemCarouselStyled>
          <img src="/eventos/AlmuerzoEvento.jpg" alt="Evento hotel Almuerzo" />
        </ItemCarouselStyled>
        <ItemCarouselStyled>
          <img src="/eventos/salonReunion.jpg" alt="Evento hotel Almuerzo" />
          <p className="legend">Legend 1</p>
        </ItemCarouselStyled>
        <ItemCarouselStyled>
          <img
            src="/eventos/ClaseDeReunion.jpg"
            alt="Evento hotel reencuentro clase "
          />
        </ItemCarouselStyled>
        <ItemCarouselStyled>
          <img
            src="/eventos/SalonMarca.jpg"
            alt="Evento hotel reencuentro clase"
          />
          <p className="legend">Legend 2</p>
        </ItemCarouselStyled>
        <ItemCarouselStyled>
          <img
            src="/eventos/GraduacionEvento.jpg"
            alt="Evento hotel graduación"
          />
        </ItemCarouselStyled>
        <ItemCarouselStyled>
          <img
            src="/eventos/SalonFiestaGraduacion.jpg"
            alt="Evento hotel graduación"
          />
          <p className="legend">Legend 3</p>
        </ItemCarouselStyled>
      </Carousel>
    </CarouselContainer>
  </Section2>
)
