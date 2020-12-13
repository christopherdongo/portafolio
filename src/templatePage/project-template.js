import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import styles from "../css/tenplate.module.css"
import Carousel from '../components/carousel/carousel'
import Slide from '../components/carousel/slide'
import {VscGithubInverted}  from 'react-icons/vsc'
import {BiLinkAlt} from 'react-icons/bi'
import Technology from '../components/technology/technology'

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
  const Tecnologies = Object.values(technology[0]).filter(node => node!=null)

  return (
    <Layout>
          
      <main className={styles.templateprojects}>

       <h2>{title}</h2>
      
        <Carousel>
             {
               Projectimages.map( (item, index)=>(
                   <Slide key={index} fluid={item.fluid} title={title} />
               ))
             }
        </Carousel>
        <article className={styles.article}>
          <div className={styles.descriptionProjects}>
              <h2>Descripcion</h2>
            <p>{description}</p>
          </div>
          <div className={styles.containButton}>
          <a className={styles.repository} href={repository} target="_blank" rel="noreferrer"><VscGithubInverted  /></a>
            <a className={styles.link} href={link} target="_blank" rel="noreferrer"><BiLinkAlt /></a>
          </div>
          <div className={styles.technology}>
                 <h2>tecnologias</h2>
                 {/*
                  Tecnologies.filter(node => node!=null).map((node, index)=>(
                    <p key={index}>{node}</p>
                  ))
                  */}
                  <Technology  Tecnologies={Tecnologies}/>
          </div>

        </article>
 
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
      technology{
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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
