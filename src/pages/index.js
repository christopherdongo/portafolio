import React from "react"
import Layout from "../components/Layout/layout"

import Descripcion from '../components/Home/descripcion'
import {graphql} from 'gatsby'

export default ()=>(
  <Layout>
    <Descripcion>
    </Descripcion>
  </Layout>
)

//exportamos el query atravez del props del componente
export const query =graphql`
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
