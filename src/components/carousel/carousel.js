import React , {useState} from 'react';
import styled, {css} from "styled-components"

const ContainerCarousel = styled.div`
 display:flex;
 justify-content:center;
 
`
const ButttonSlide =styled.button`
background:white;
border: 0px;
cursor:pointer;
::after{
  border: 0px;
}
svg{
  width:3rem;
  height:2rem;
  cursor:pointer;
}
 `
const CarruselWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;
const CarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props =>(props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`
const ContainerButton= styled.div`
 display:flex;
 justify-content:center;

 button{
   margin: 0 3rem;
 }
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

     setTimeout(()=>{
      setCurrentSlide((currentSlide -1 + activeSlide.length) % activeSlide.length)
     },4000)

  const activeSlide = children.map((slide, index) => 
  <CarouselSlide active={currentSlide===index} key={index}>{slide}</CarouselSlide>)

  return (
    <ContainerCarousel>
      <CarruselWrapper>
          <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
          </SCarouselSlides>
      </CarruselWrapper>

      {/*
      <ContainerButton>
      <ButttonSlide
       onClick={ ()=> setCurrentSlide((currentSlide -1 + activeSlide.length) % activeSlide.length)}
      >
        <AiOutlineLeft />
      </ButttonSlide>
      <ButttonSlide
      onClick={ ()=> setCurrentSlide((currentSlide + 1) % activeSlide.length)}
      >
        <AiOutlineRight />
      </ButttonSlide>
      </ContainerButton>
      */}
    </ContainerCarousel>
  )
}

export default Carousel
