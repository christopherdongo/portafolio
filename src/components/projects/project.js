import React from 'react';
import styles from '../../css/project.module.css'
import {graphql, useStaticQuery} from 'gatsby'
import CardProject from './card/cardProject'

const getData = graphql`
{
    projects:allContentfulProjects{
      edges{
        node{
          contentful_id
          title
          slug
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Project=()=>{
    //recibiendo data content
    const {projects} = useStaticQuery(getData)

    return(
        <main className={styles.project}>
         <CardProject projects={projects}  />
        </main>
    )
}

export default Project