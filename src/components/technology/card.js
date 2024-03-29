import React from "react"
import * as styles from "../../css/tenplate.module.css"

export default function Card({ techproject }) {
  return (
    <>
      {techproject.map((node, index) => (
        <article key={index} className={styles.container}>
          <picture className={styles.technologyIcon}>{node[0].icon}</picture>
          <div className={styles.cloud}>
            <h1 className={styles.cloudText}>{node[0].tech}</h1>
          </div>
        </article>
      ))}
    </>
  )
}
