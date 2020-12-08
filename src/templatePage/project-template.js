import React, {useRef} from "react"
import Layout from "../components/Layout/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../css/tenplate.module.css"
import Carousel from '../components/carrusel/carousel'
import Slide from '../components/carrusel/slide'

const Template = ({ data }) => {
  //destructuring
  const { projects } = data
  const {
    id,
    title,
    repository,
    link,
    views,
    description: { description },
  } = projects

  //desctructuring imagen
  const [...Projectimages] = views
  
  return (
    <Layout>
      <main className={styles.templateprojects}>
        <Carousel>
             {
               Projectimages.map( (item, index)=>(
                   <Slide key={index} fluid={item.fluid} />
               ))
             }
        </Carousel>
 
      </main>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($singleslug: String) {
    projects: contentfulProjects(slug: { eq: $singleslug }) {
      id
      title
      repository
      link
      slug
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
