import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import styles from "../../css/tenplate.module.css"

const SContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns:0% 1fr;
  }
`
const StextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width:100%;
  height:0px;
 
  h1{
    font-size: 2rem;
    color:white;
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
      <Img fluid={fluid} alt="img slide" className={styles.images} />
    </SContainer>
  )
}

export default Slide
