import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from "react-router-dom";
import axios from "axios"

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ nombre: '', apellido: '', correo: '', password: ''}}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        apellido: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        correo: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const user = JSON.stringify({
            "Correo": values.correo,
            "Nombres": values.nombre,
            "Password": values.password,
            "Apellido": values.apellido
          })

          console.log(user);
          
          
          // axios.post({
          //   method: 'post',
          //   url: 'https://finanzasapirestful.azurewebsites.net/api/Usuarios',
          //   headers: {}, 
          //   data: {
          //     "Correo": values.correo,
          //     "Nombres": values.nombre,
          //     "Password": values.password,
          //     "Apellido": values.apellido
          //   }})
          axios.post('https://finanzasapirestful.azurewebsites.net/api/Usuarios', user)
            .then(res=>{
            console.log(res);
            setSubmitting(false);
            navigate('/sign-in');
          }).catch(err=>{
            console.error(err);
          })
          
        }, 400);
      }}
    >
      <Form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <Field name="nombre" type="text" className="form-control" placeholder="Nombre"/>
          <ErrorMessage name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido">Apellido</label>
          <Field name="apellido" type="text" className="form-control" placeholder="Apellido"/>
          <ErrorMessage name="apellido" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="correo">Correo</label>
          <Field name="correo" type="email" className="form-control" placeholder="Correo"/>
          <ErrorMessage name="correo" />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <Field name="password" type="password" className="form-control" placeholder="Ingrese Contraseña" />
          <ErrorMessage name="password" />
        </div>

        <div className="d-grid">
          <button type="submit" className="button-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </Form>
    </Formik>
  );
};

export default SignupForm;
