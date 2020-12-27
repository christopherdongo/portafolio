import React from "react"
import styles from "../../css/descripcion.module.css"
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const getImagen = graphql`
query{
  defaultphoto:file(relativePath:{eq:"christopher_dongo.jpg"}){
    childImageSharp{
      fixed(width:240 height:300){
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
  }
`
const Descripcion = () => {

  const data = useStaticQuery(getImagen);
  const {fixed} = data.defaultphoto.childImageSharp;
  return (
    <main className={styles.container}>
      <div className={styles.firsRows}>
        <div className={styles.containerImagen}>
         <Img fixed={fixed} alt="imagen de photo" className={styles.avatar} />
        </div>
        <div className={styles.name}>
          <h1>Christopher Dongo Huarancca</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          ¡Hola!, me llamo Christopher, soy bachiller en ingeneria de
          sistemas e informatica, soy peruano, tengo 28 años y me apasiona el
          desarrollo web. Me gusta aprender de forma autodidacta y untarme un
          poco de todo, me gusta mas el Frontend, Mi lenguaje preferido es JavaScript y sus diversos frameworks
          para el desarrollo como express, nodejs para el backend, nextjs, gatsby y en especial me gusta mucho la libreria React
          mi gran objetivo es convertirme en fullstack developer.
        </p>
      </div>
    </main>
  )
}

export default Descripcion

