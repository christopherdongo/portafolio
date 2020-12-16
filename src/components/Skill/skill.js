import React from 'react';
import styles from '../../css/skill.module.css'
import skill from '../constants/skill'

const Skill=()=>{

    return(
        <section className={styles.sectionPrincipal}>
            <h1>Mis Habilidades</h1>
         <div className={styles.card}>
              { skill.map( (skill, index)=>{
                  return(
                      <article key={index} className={styles.container}>
                         <picture className={styles.containerIcon}>
                          {skill.icon}
                         </picture>
                        {/* <div className={styles.nameSkill}>
                            <h1>{skill.name}</h1>
                         </div>*/}
                      </article>
                  )
              })}
         </div>
        </section>
    )
}

export default Skill

