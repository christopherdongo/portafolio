import React from "react";
import loadable from '@loadable/component';
import styles from "../../css/skill.module.css";
import skill from "../constants/skill";
import tech from "../constants/tech";
import '../../css/spinner.css'

const OtherComponent = loadable(() => import('./cardskill'),{
    fallback: <div className="sk-cube-grid">
    <div className="sk-cube sk-cube1"></div>
    <div className="sk-cube sk-cube2"></div>
    <div className="sk-cube sk-cube3"></div>
    <div className="sk-cube sk-cube4"></div>
    <div className="sk-cube sk-cube5"></div>
    <div className="sk-cube sk-cube6"></div>
    <div className="sk-cube sk-cube7"></div>
    <div className="sk-cube sk-cube8"></div>
    <div className="sk-cube sk-cube9"></div>
  </div>,
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
