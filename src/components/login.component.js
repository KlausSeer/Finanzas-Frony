import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ user: '', password: ''}}
      validationSchema={Yup.object({
        user: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const user = {
            "Correo": values.correo,
            "Nombres": "",
            "Password": values.password,
            "Apellido": ""
          }
          axios.post('https://finanzasapirestful.azurewebsites.net/SignIn', {user}).then(res=>{
            console.log(res);
            setSubmitting(false);
            navigate('/calculate');
          }).catch(err=>{
            console.error(err);
          })
        }, 400);
      }}
    >
      <Form>
        <h3>Sign In</h3>
        
        <div className="mb-3">
          <label htmlFor="email">Correo</label>
          <Field name="email" type="text" className="form-control" placeholder="Correo"/>
          <ErrorMessage name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <Field name="password" type="password" className="form-control" placeholder="Ingresa Contraseña" />
          <ErrorMessage name="password" />
        </div>

        <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

        <div className="d-grid">
          <button type="submit" className="button-primary">
            Sign In
          </button>
        </div>
        <p className="forgot-password text-right">
        New Account <a href="/sign-up">sign up?</a>
      </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
