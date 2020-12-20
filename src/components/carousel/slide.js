import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import styles from "../../css/tenplate.module.css"

const SContainer = styled.div`
  display: grid;
  grid-template-columns:1fr;
  grid-row: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns:0% 1fr;
    margin: 2rem;
  }
`
const ContainerImg = styled.div`
  width:100%;
`
const StextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  height:0px;
  min-width:100%;
  h1{
    font-size: 3rem;
    color:white;
    text-align:center;
  }
  @media screen and (min-width: 768px) {
  }
`
const Slide = ({ fluid, title }) => {
  return (
    <SContainer>
      <StextWrapper>
        <h1>{title}</h1>
      </StextWrapper>
      <ContainerImg>
      <Img fluid={fluid} alt="img slide" className={styles.images} />
      </ContainerImg>
    </SContainer>
  )
}

export default Slide
