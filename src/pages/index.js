import React from "react"
import Layout from "../components/Layout/layout"
import Descripcion from "../components/Home/descripcion"
import Seo from "../components/SEO.js"

export const desc =
  "Portafolio realizado con gatsby, tiene la finalidad de dar a conocer mis conocimientos en programacion en especial en el frontend, contiene proyectos personales que me han permitido consolidar mis conocimeintos a seguir investigando y aprendiendo"

export default () => (
  <Layout>
    <Seo title="Home" description={desc} />
    <Descripcion />
  </Layout>
)
