import React from "react"
import * as styles from "../../css/descripcion.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from 'gatsby'
import TitleAnimation from './titleanimation'

const getImagenProfile = graphql`
query{
  defaultphoto:file(relativePath:{eq:"christopher_dongo.jpg"}){
    childImageSharp{
       gatsbyImageData(width:240 height:300)
    }
  }
  }
`
const Home = () => {

  const data = useStaticQuery(getImagenProfile);
  const Image = getImage(data.defaultphoto);
  console.log(Image)

  const words=['Frontend.','Developer.'];

  return (
    <main className={styles.container}>
      <div className={styles.firsRows}>
        <div className={styles.containerImagen}>
         <GatsbyImage image={Image} alt="imagen de photo" className={styles.avatar}/>
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
