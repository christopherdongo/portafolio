import React from "react"
import styles from "../../css/descripcion.module.css"
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import TitleAnimation from './titleanimation'

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
const Home = () => {

  const data = useStaticQuery(getImagen);
  const {fixed} = data.defaultphoto.childImageSharp;
  const words=['Frontend.','Developer.'];

  return (
    <main className={styles.container}>
      <div className={styles.firsRows}>
        <div className={styles.containerImagen}>
         <Img fixed={fixed} alt="imagen de photo" className={styles.avatar} />
        </div>
        <div className={styles.name}>
          <h1>Christopher Dongo Huarancca</h1>
          <TitleAnimation words={words} />
        </div> 
        
      </div>
      <div className={styles.description}>
        <p>
          ¡Hola!, me llamo Christopher Dongo, y me apasiona el
          desarrollo web. Me gusta aprender de forma autodidacta y untarme un
          poco de todo, me gusta mas el Frontend. Mi lenguaje preferido es JavaScript y sus diversos framework,
          Express, Nodejs para el backend, Nextjs, Gatsby y en especial me gusta mucho la libreria Reactjs.
        </p>
      </div>
    </main>
  )
}

export default Home

