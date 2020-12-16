import React from "react"
import styles from "../../css/contact.module.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import Alert from '../alerta/alert'
const Contact = () => {

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            message:""
        },
        validationSchema:Yup.object({
            name: Yup.string().required("El Nombre es Obligatorio"),
            email:Yup.string().email('El email no es valido').required("El email es Obligatorio"),
            message:Yup.string().required('El mensaje es obligatorio')
        }),
        onSubmit:(valores)=>{
            console.log(valores.email)
            Reset();
        }
    });

  //resetar los campos
    const Reset=()=>{
        formik.values.name="";
        formik.values.email="";
        formik.values.message="";
    }


  return (
    <main className={styles.containerContact}>
      <form className={styles.form}
      onSubmit={formik.handleSubmit}
      >
      <h1>Contactame</h1>
        <div className={styles.line}></div>
        <div>
          <label htmlFor="name">Nombre <span className={styles.span}>*</span></label>
          <input 
          type="text" 
          id="name" 
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          placeholder="Nombre"
          className={ formik.errors.name ? styles.error : null }
          />
          <Alert message={formik.errors.name} />
        </div>
        <div>
          <label htmlFor="email">Correo <span className={styles.span}>*</span></label>
          <input
          id="email" 
          type="text"
          values={formik.values.email} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Correo"
          className={ formik.errors.name ? styles.error : null }
          />
          <Alert message={formik.errors.email} />

        </div>
        <div>
          <label htmlFor="message">Mensaje <span className={styles.span}>*</span></label>
          <textarea 
          type="text" 
          cols="50" 
          rows="12"
          id="message"
          values={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          placeholder="Mensaje"
          className={ formik.errors.name ? styles.error : null }
          ></textarea>
          <Alert message={formik.errors.message} />

        </div>

        <input type="submit" value="Enviar" className={styles.send}  />
      </form>
    </main>
  )
}

export default Contact
