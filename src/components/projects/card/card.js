import React from "react"
import Image from "gatsby-image"
import styles from "../../../css/project.module.css"
import Proptypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Card = ({ project }) => {
  const { image, link, repository, title,slug} = project

  return (
    <article className={styles.card}>
      <div className={styles.imagenContainer}>
        <Image fluid={image.fluid} className={styles.imagen} alt="imagen-alt" />
        <AniLink fade className={styles.link} to={`/proyectos/${slug}`}>
          Detalles
        </AniLink>
      </div>
      <div className={styles.footerCard}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.infoCard}>
          <ul>
            <li><a href={link} target="_blank" rel="noreferrer">Ver</a></li>
            <li><a href={repository} target="_blank" rel="noreferrer">Repositorio</a></li>
          </ul>
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
