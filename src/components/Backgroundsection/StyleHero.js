import React from 'react';
import styled from 'styled-components'
import  BackgroundImage from 'gatsby-background-image'
import {useStaticQuery, graphql} from 'gatsby'

export const getImagen =graphql`
query{
    programer:file(relativePath:{eq:"programer.jpg"}){
       childImageSharp{
        fluid(quality:90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


const StyleHero=({className, children, home, query})=>{
    const data = useStaticQuery(query)
    const {fluid} = data.programer.childImageSharp
    
    return(
        <BackgroundImage
         className={className}
         fluid={fluid}
         home={home}
        >
            {children}
        </BackgroundImage>
    )
}
export default styled(StyleHero)`
  min-height: ${props => props.home? '100vh' : '50vh'};
  background: ${props => props.home? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'};
  background-position:center;
  background-repeat:no-repeat !important;
  background-size:cover;
  opacity: 1 !important;
  display:flex;
  justify-content:center;
  align-items:Center;
`