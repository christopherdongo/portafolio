import React,{useEffect} from "react";
import styles from "../../css/skill.module.css";
import skill from "../constants/skill";
import tech from "../constants/tech";
import CardSkill from './cardskill';


const Skill = () => {
  const SkillMap = () => {
    const result = []
    //transform:
    const Tech = Object.values(tech[0])
    Tech.map(tech => result.push(skill.filter(node => node.name === tech)))
    return result
  }
  const myskill = SkillMap()

  useEffect(() => {
    SkillMap();
  }, [myskill])

  return (
    <section className={styles.sectionPrincipal}>
      <h1 className={styles.title}>Mis Habilidades</h1>
      <div className={styles.card}>
        <CardSkill myskill={myskill} />
      </div>
    </section>
  )
}
export default Skill
