import React, {memo} from "react";
import styles from "../../css/skill.module.css";
import skill from "../constants/skill";
import tech from "../constants/tech";
import CardSkill from './cardskill';


const Skill = memo(() => {
  const SkillMap = () => {
    const result = []
    //transform:
    const Tech = Object.values(tech[0])
    Tech.map(tech => result.push(skill.filter(node => node.name === tech)))
    return result
  }
  const myskill = SkillMap()

  return (
    <section className={styles.sectionPrincipal}>
      <h1 className={styles.title}>Mis Habilidades</h1>
      <div className={styles.card}>
        <CardSkill myskill={myskill} />
      </div>
    </section>
  )
})

export default Skill
