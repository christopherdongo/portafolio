import React from "react"
import Layout from "../components/Layout/layout"
import Descripcion from '../components/Home/descripcion'
import Seo from '../components/SEO.js'


export default ()=>(
  <Layout>
    <Seo title="Home" description="this is description" />
    <Descripcion />
  </Layout>
)

