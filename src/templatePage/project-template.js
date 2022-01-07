import React from "react";
import loadable from '@loadable/component';
import Layout from "../components/Layout/layout";
import { graphql } from "gatsby";
import { timeout } from 'promise-timeout'

import * as styles from "../css/tenplate.module.css";
import {GatsbyImage} from 'gatsby-plugin-image'
import Seo from '../components/SEO';
import Spinner from '../components/spinner'
import TemplateButton from './templatebutton'
import { useTemplate } from "../hooks/useTemplate";


const OtherComponent = loadable(() => timeout(import('../components/technology/technology'),6000),{
  fallback: <Spinner />,
})

const Template = ({ data }) => {
  const {projects} = data;
  //destructuring
 const { imageTrans,
  Tecnologies,
  Projectimages,
  title,
  repository,
  link,
  description} = useTemplate(projects)

  return (
    <Layout>
      <Seo title={title} description="this is description" />
      <main className={styles.templateprojects}>
      <h1 className={styles.titleProyecto}>{title}</h1>
          <div className={styles.imgContainer}>
          {Projectimages.map((item, index) => (
            <GatsbyImage key={index} image={imageTrans(item)} title={title} className={styles.images} alt="imagenes de tecnologia"/>
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
    }
    description {
      description
    }
    views {
      gatsbyImageData(width:700 quality:50)
    }
  }
}
`
