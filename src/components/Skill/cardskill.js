import React from "react"
import styles from '../../css/skill.module.css'
const CardSkill = ({skill}) => {

    const {icon, name, text} = skill[0];

  return (
    <>
      <article className={styles.container}>
        <div className={styles.containerIcon}>
          {icon}
         <div className={styles.nameSkill}>
            <h1>{name}</h1>
            <p>{text}</p> 
           </div> 
        </div>
      </article>
    </>
  )
}

export default CardSkill
