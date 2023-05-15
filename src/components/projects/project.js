import React from 'react';
import * as styles from '../../css/project.module.css'
import CardProject from './card/cardProject'
import { useProjects } from '../../hooks/useProjects';
const Project=()=>{

  const {projects} = useProjects();

    return(
        <div className={styles.project}>
           <h1>Proyectos</h1>
         <CardProject projects={projects}  />
        </div>
    )
}

export default Project
