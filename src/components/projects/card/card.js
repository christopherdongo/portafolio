import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../../css/project.module.css"
import Proptypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Card = ({ project }) => {
  const { image, slug, title } = project

  const Image = getImage(image);

  return (
    <article className={styles.card}>
      <div className={styles.imagenContainer}>
        <GatsbyImage image={Image} className={styles.imagen} alt="imagen-alt" />
        <AniLink 
        swipe 
        direction="left"
        duration={1.1}
        hex="#663399"
        className={styles.link} to={`/proyectos/${slug}`}>
          Detalles
        </AniLink>
        <div className={styles.containerTitle}>
          <h1 className={styles.titleProjects}>{title}</h1>
        </div>
      </div>
    </article>
  )
}
export default Card

//revisar los proptypes
Card.propTypes = {
  Card: Proptypes.shape({
    title: Proptypes.string.isRequired,
    link: Proptypes.string.isRequired,
    repository: Proptypes.string.isRequired,
  }),
}
