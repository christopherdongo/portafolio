import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as styles from "../css/contact.module.css"

export const useFormHooks = () => {

/*funcion para codificar los datos que se enviara a netlify*/

  const useForm =()=>(
    <Formik
    initialValues={{
      name: "",
      email: "",
      message: "",
    }}
    onSubmit={async(values, actions) => {
      const options = {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
        },
        body: JSON.stringify(values),
      }

      try{
       const dat = await fetch('https://us-central1-devter-91343.cloudfunctions.net/sendMailPortafolio/send-email',options)
       const result = await dat.json();
        if(result.message) alert('Su correo ha sido Enviado')
       actions.resetForm();
      }catch(err){
        console.log(err)
      }

      
     
    }}

    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const errors = {}
      if (!values.name) {
        errors.name = "Nombre Requerido"
      }
      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = "Correo no Valido"
      }
      if (!values.message) {
        errors.message = "Mensaje Requerido"
      }
      return errors
    }}
  >
    <Form
      className={styles.form}
      name="contact"
    >
      <h1>Contactame</h1>
      <div>
        <label htmlFor="name" className={styles.label}>
          Nombre<span className={styles.span}>*</span>:{" "}
        </label>
        <Field type="text" name="name" className={styles.input} />
        <span className={styles.error}>
          <ErrorMessage name="name" />
          
        </span>
      </div>

      <div>
        <label htmlFor="email" className={styles.label}>
          Correo<span className={styles.span}>*</span>:{" "}
        </label>
        <Field type="email" name="email" className={styles.input} />
        <span className={styles.error}>
          <ErrorMessage name="email" />
        </span>
      </div>

      <div>
        <label htmlFor="message" className={styles.label}>
          Mensaje<span className={styles.span}>*</span>:{" "}
        </label>
        <Field
          cols="50"
          rows="8"
          type="text"
          name="message"
          component="textarea"
          className={styles.message}
        />
        <span className={styles.error}>
          <ErrorMessage name="message" />
        </span>
      </div>

      <button className={styles.send} type="submit">
        Send
      </button>
    </Form>
  </Formik>
  )


  return {
      useForm
  }



}
