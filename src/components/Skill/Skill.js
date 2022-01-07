import React from "react";
import * as styles from "../../css/skill.module.css";
import CardSkill from './cardskill';
import { useSkillHooks } from "../../hooks/useSkillHooks";

const Skill = () => {
  
  const {myskill} = useSkillHooks();

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
