import React from 'react';
import * as styles from '../../css/project.module.css'
import CardProject from './card/cardProject'
import { useProjects } from '../../hooks/useProjects';
const Project=()=>{

  const {projects} = useProjects();

    return(
        <main className={styles.project}>
           <h1>Proyectos</h1>
         <CardProject projects={projects}  />
        </main>
    )
}

export default Project

/*
{
    projects:allContentfulProjects{
      edges{
        node{
          contentful_id
          title
          slug
          image{
            fluid(maxWidth:700 quality:100){
              ...GatsbyContentfulFluid_tracedSVG
            }
        }
      }
      }
    }
  }
*/