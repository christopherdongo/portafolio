import React, { lazy, Suspense } from "react"
import styles from "../../css/skill.module.css"
import skill from "../constants/skill"
import tech from "../constants/tech"

const CardLazy = lazy(() => import("./cardskill"))
const renderLoader = () => <p>Loading</p>

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
            <Suspense fallback={renderLoader()} key={index}>
              <CardLazy key={index} skill={skill} />
            </Suspense>
          )
        })}
      </div>
    </section>
  )
}

export default Skill
