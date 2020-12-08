import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import styles from '../../css/tenplate.module.css'

const SContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content:center;
  margin:3rem;
`

const StextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
`

const Slide = ({ fluid }) => {
    console.log(fluid)
  return (
    <SContainer>
      <StextWrapper>
        <h1>header</h1>
        <p>
          Aliquip sit voluptate enim deserunt ut irure proident fugiat fugiat eu
          exercitation aliqua sunt incididunt.
        </p>
      </StextWrapper> 
      <Img fluid={fluid} alt="img slide" className={styles.images} />
    </SContainer>
  )
}

export default Slide
