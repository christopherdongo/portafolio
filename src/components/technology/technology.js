import React from "react"
import Tech from "../constants/technology"
import styles from "../../css/tenplate.module.css"
const Technology = ({ Tecnologies }) => {

  const tech = () => {
    let result = []
    for (let j = 0; j <= Tecnologies.length; j++) {
      result.push(Tech.filter(node => node.name === Tecnologies[j]))
    }
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
        </article>
      ))}
    </>
  )
}

export default Technology
