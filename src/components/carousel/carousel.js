import React , {useState, useEffect} from 'react';
import styled, {css} from "styled-components"

const ContainerCarousel = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
`
const CarruselWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;
const CarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props =>(props.active ? 1 : 0)};
  transition: all 0.8s ease;
  width: 100%;
`

const SCarouselSlides = styled.div`
 display:flex;
 ${props => props.currentSlide && css` transform: translateX(-${props.currentSlide * 100}%)`
};
transition: all 0.7s ease;
`
const Carousel = ({ children}) => {

  //stados
  const [currentSlide, setCurrentSlide] = useState(0)

  const activeSlide = children.map((slide, index) => 
  <CarouselSlide active={currentSlide===index} key={index}>{slide}</CarouselSlide>)

  useEffect(() => {
  const interval = setInterval(()=>{
      CarouselNext();
    }, 3000)
    return ()=>clearInterval(interval)
  })

  const CarouselNext=()=>{
    if(currentSlide ===activeSlide.length){
      setCurrentSlide(0)
    }else{
      setCurrentSlide((currentSlide -1 + activeSlide.length) % activeSlide.length)
    }
  }

  return (
    <ContainerCarousel>
      <CarruselWrapper>
          <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
          </SCarouselSlides>
      </CarruselWrapper>
    </ContainerCarousel>
  )
}

export default Carousel
