import React from "react"
import Tech from "../constants/technology"
import styles from "../../css/tenplate.module.css"
const Technology = ({ Tecnologies }) => {

  const tech = () => {
    let result = []
    for (let j = 0; j <= Tecnologies.length; j++) {
      result.push(Tech.filter(node => node.name === Tecnologies[j]))
    }
    return result
  }
  const arry = tech()
  const result = arry.filter(node => node.length !== 0)
  //console.log( result.map( node =>node[0].icon))

  //const result = Skill.filter(skill => skill.name === function(){for(let i=0; i<Tecnologies.length; i++){return Tecnologies[i] }})
  //console.log(result)

  return (
    <>
      {result.map((node, index) => (
        <article key={index} className={styles.container} >
          <picture className={styles.technologyIcon}>
            {node[0].icon}
          </picture>
        </article>
      ))}
    </>
  )
}

export default Technology
