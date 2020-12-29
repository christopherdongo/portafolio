import React from "react"
import Skill from "../constants/skill"
import styles from "../../css/tenplate.module.css"
const Technology = ({ Tecnologies }) => {
  const tech = () => {
    let result = []
        Tecnologies.map( (tech)=>{ 
      return(
        result.push(Skill.filter(node => node.name === tech))
      )
    })
    return result.filter(node => node.length !== 0)
  }
  //recibe el array
 const arry = tech();

  return (
    <>
      {arry.map((node, index) => (
        <article key={index} className={styles.container} >
          <picture className={styles.technologyIcon}>
            {node[0].icon}
          </picture>
          <div className={styles.cloud}>
            <h1>{node[0].tech}</h1>
          </div>
        </article>
      ))}
    </>
  )
}

export default Technology
