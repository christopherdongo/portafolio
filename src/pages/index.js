import React from "react"
import Layout from "../components/Layout/layout"
import Descripcion from "../components/Home/descripcion"
import Seo from "../components/SEO.js"

export const desc =
  "Portafolio realizado con la finalidad de dar a conocer mis conocimientos en el frontend, contiene proyectos personales que me han permitido a consolidar mis conocimientos"

export default () => (
  <Layout>
    <Seo title="Home" description={desc} />
    <Descripcion />
  </Layout>
)
