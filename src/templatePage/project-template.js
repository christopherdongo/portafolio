import React from "react";
import loadable from '@loadable/component';
import Layout from "../components/Layout/layout";
import { graphql } from "gatsby";
import styles from "../css/tenplate.module.css";
import Img from 'gatsby-image';
import Seo from '../components/SEO';
import Spinner from '../components/spinner'
import TemplateButton from './templatebutton'

const OtherComponent = loadable(() => import('../components/technology/technology'),{
  fallback: <Spinner />,
})

const Template = ({ data }) => {
  //destructuring
  const { projects } = data
  const {
    title,
    repository,
    link,
    views,
    technology,
    description: { description },
  } = projects

  //desctructuring imagen
  const [...Projectimages] = views

  /*convertir a arrays*/
  const Tecnologies = Object.values(technology[0]).filter(node => node != null)

  return (
    <Layout>
      <Seo title={title} description="this is description" />
      <main className={styles.templateprojects}>
      <h1 className={styles.texto}>{title}</h1>
          <div className={styles.imgContainer}>
          {Projectimages.map((item, index) => (
            <Img key={index} fluid={item.fluid} title={title} className={styles.images} />
          ))}
          </div>
           
        <section className={styles.article}>
          <div className={styles.descriptionProjects}>
            <h2>Descripcion</h2>
            <p className={styles.texto}>{description}</p>
          </div>
            <TemplateButton link={link} repository={repository} />
          <div className={styles.technology}>
            <h2>tecnologias</h2>
            <div className={styles.containerTechnology}>
              <OtherComponent Tecnologies={Tecnologies} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
export default Template

//query para traer la informacion
export const query = graphql`
query($singleslug: String) {
  projects: contentfulProjects(slug: { eq: $singleslug }) {
    title
    repository
    link
    slug
    technology {
      Css
      Gulp
      Html5
      Sass
      Javascript
      ReactRouter
      ReactJS
      MongoDB
      Bootstrap4
      NodeJS
      ExpressJS
      Gatsby
      GQL
      Contentfull
    }
    description {
      description
    }
    views {
      fluid(maxWidth: 500, quality: 100){
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`
