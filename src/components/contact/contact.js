import React from "react"
import styles from "../../css/contact.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
const Contact = () => {

 /*funcion para codificar los datos que se enviara a netlify*/ 
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <main className={styles.containerContact}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          /*enviar los datos a netlify*/ 
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              alert("Su correo su enviado")
              actions.resetForm()
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => actions.setSubmitting(false))
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
          method="POST"
          name="contact" 
          data-netlify={true}
        >
          <h1>Contactame</h1>
          <div className={styles.line}></div>
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
              rows="12"
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
    </main>
  )
}

export default Contact
