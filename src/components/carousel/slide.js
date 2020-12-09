import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import styles from "../../css/tenplate.module.css"

const SContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 35% 1fr;
  }
`
const StextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`
const Slide = ({ fluid }) => {
  console.log(fluid)
  return (
    <SContainer>
      <StextWrapper>
        <h1>slide</h1>
        <p>
          Cupidatat non do exercitation aliquip aliqua sunt in exercitation elit
          non irure ullamco.
        </p>
      </StextWrapper>
      <Img fluid={fluid} alt="img slide" className={styles.images} />
    </SContainer>
  )
}

export default Slide
