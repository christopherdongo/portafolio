import React from "react"
import styles from "../../css/contact.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
const Contact = () => {
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
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              alert("Success")
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
            errors.name = "Name Required"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required"
          }
          if (!values.message) {
            errors.message = "Message Required"
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
          <div>
            <label htmlFor="name" className={styles.label}>
              Name<span className={styles.span}>*</span>:{" "}
            </label>
            <Field type="text" name="name" className={styles.input} />
            <span className={styles.error}>
           <ErrorMessage name="name" />
           </span>
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>
              Email<span className={styles.span}>*</span>:{" "}
            </label>
            <Field type="email" name="email" className={styles.input} />
           <span className={styles.error}>
           <ErrorMessage name="email" />
           </span>
          </div>

          <div>
            <label htmlFor="message" className={styles.label}>
              Message<span className={styles.span}>*</span>:{" "}
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
