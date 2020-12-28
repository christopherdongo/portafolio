import React from 'react';
import styles from '../../css/skill.module.css'
import skill from '../constants/skill'
import tech from '../constants/tech'
const Skill=()=>{

    const SkillMap=()=>{
        const result=[];
        //transform:
        const Tech = Object.values(tech[0])
        Tech.map( (tech) => (
            result.push( skill.filter(node => node.name === tech))
        ))
        return result;
    }
    const arr = SkillMap();

    return(
        <section className={styles.sectionPrincipal}>
            <h1 className={styles.title}>Mis Habilidades</h1>
         <div className={styles.card}>
              { arr.map( (skill, index)=>{
                  return(
                      <article key={index} className={styles.container}>
                         <div className={styles.containerIcon}>
                          {skill[0].icon}
                          <div className={styles.nameSkill}>
                            <h1>{skill[0].name}</h1>
                            <p>{skill[0].text}</p>
                         </div>
                         </div>
                      </article>
                  )
              })}
         </div>
        </section>
    )
}

export default Skill

