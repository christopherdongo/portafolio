import React from "react"
import Layout from "../components/Layout/layout"
import Descripcion from '../components/Home/descripcion'
import Seo from '../components/SEO.js'


export default ()=>(
  <Layout>
    <Seo title="Home" description="descripción corta de quién soy y lo que quiero llegar a ser" />
    <Descripcion />
  </Layout>
)

