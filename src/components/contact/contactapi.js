import React from 'react';
import  {FaWhatsapp}  from "react-icons/fa";
import styles from "../../css/contact.module.css";

export default function ContactApi(){

    return(
        <>
        <section className={styles.containerWsp}>
        <h1>Comunícate conmingo</h1>
        <a
          href="https://api.whatsapp.com/send?phone=+51919060263"
          target="_blank"
          rel="noreferrer"
          className={styles.iconWsp}
        >
          <FaWhatsapp />
          Escribeme
        </a>
      </section>
        </>
    )
}

