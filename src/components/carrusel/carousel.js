import React , {useState} from 'react';
import styled, {css} from "styled-components"

const ContainerCarousel = styled.div`
 display:flex;
 flex-direction:column;
`
const CarruselWrapper = styled.div`
  display: flex;
`;
const SCarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props =>(props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`

const SCarouselSlides = styled.div`
 display:flex;
 ${props => props.currentSlide && css` transform: translateX(-${props.currentSlide * 100}%)`
};
transition: all 0.5s ease;
`
const Carousel = ({ children}) => {

  //stados
  const [currentSlide, setCurrentSlide] = useState(0)

  const activeSlide = children.map((slide, index) => 
  <SCarouselSlide active={currentSlide===index} key={index}>{slide}</SCarouselSlide>)

  return (
    <ContainerCarousel>
      <CarruselWrapper>
          <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
          </SCarouselSlides>
      </CarruselWrapper>
      <div>
      <button
       onClick={ ()=> setCurrentSlide((currentSlide -1 + activeSlide.length) % activeSlide.length)}
      >
        Left
      </button>
      <button
      onClick={ ()=> setCurrentSlide((currentSlide + 1) % activeSlide.length)}
      >
        Right
      </button>
      </div>
    </ContainerCarousel>
  )
}

export default Carousel
