import React from "react"
import styles from "../../css/descripcion.module.css"
import logo from "../../images/christopher_dongo.jpg"


const Descripcion = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.firsRows}>
        <div className={styles.containerImagen}>
          <img src={logo} alt="img" className={styles.avatar} />
        </div>
        <div className={styles.name}>
          <h1>Christopher Dongo Huarancca</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          ¡Hola!, me llamo Christopher Dongo, soy bachiller en ingeneria de
          sistemas e informatica, soy peruano, tengo 28 años y me apasiona el
          desarrollo web. Me gusta aprender de forma autodidacta y untarme un
          poco de todo, me gusta mas el Frontend y tambien tengo nociones de
          backend, Mi lenguaje preferido es JavaScript y sus diversos frameworks
          para el desarrollo como next,express, librerias reactjs, entre otras.
          mi gran objetivo es convertirme en fullstack developer
        </p>
      </div>
    </section>
  )
}

export default Descripcion

