import React from "react"
import Layout from "../components/Layout/layout"
import Home from "../components/Home/home"
import Seo from "../components/SEO.js"

const desc =
  "Portafolio realizado con la tecnología Gatsby, contiene proyectos personales que me han permitido consolidar mis conocimientos en el front end"

const Index = () => (
  <Layout>
    <Seo title="Sobre Mi" description={desc} />
    <Home />
  </Layout>
)


export default Index;