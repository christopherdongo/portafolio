import React from "react"
import { VscGithubInverted } from "react-icons/vsc"
import { BiLinkAlt } from "react-icons/bi"
import styles from "../css/tenplate.module.css"

export default function TemplateButton({ link, repository }) {
  return (
    <div className={styles.containButton}>
      <div className={styles.containerGithub}>
        <a
          className={styles.repository}
          href={repository}
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubInverted   />
        </a>
        <p className={styles.cloudGithub}>Repositorio</p>
      </div>
      <div className={styles.containerLink}>
        <a className={styles.link} href={link} target="_blank" rel="noreferrer">
          <BiLinkAlt />
        </a>
        <p className={styles.cloudLink}>Visitar</p>
      </div>
    </div>
  )
}
