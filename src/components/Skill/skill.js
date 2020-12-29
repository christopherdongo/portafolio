import React from "react";
import loadable from '@loadable/component';
import styles from "../../css/skill.module.css";
import skill from "../constants/skill";
import tech from "../constants/tech";
import Spinner from '../spinner'

const OtherComponent = loadable(() => import('./cardskill'),{
    fallback: <Spinner />,
  })
  

const Skill = () => {
  const SkillMap = () => {
    const result = []
    //transform:
    const Tech = Object.values(tech[0])
    Tech.map(tech => result.push(skill.filter(node => node.name === tech)))
    return result
  }
  const arr = SkillMap()

  return (
    <section className={styles.sectionPrincipal}>
      <h1 className={styles.title}>Mis Habilidades</h1>
      <div className={styles.card}>
        {arr.map((skill, index) => {
          return (
              <OtherComponent key={index} skill={skill} />
          )
        })}
      </div>
    </section>
  )
}
export default Skill
