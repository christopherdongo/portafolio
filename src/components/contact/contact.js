import React from "react"
import * as styles from "../../css/contact.module.css"
import ContactApi from './contactapi';
import { useFormHooks } from "../../hooks/useFormHooks";
const Contact = () => {

  const {useForm} = useFormHooks();


  return (
    <main className={styles.containerContact}>
        <ContactApi _/>
         {
           useForm()
         }
    </main>
  )
}

export default Contact
