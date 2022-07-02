import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ correo: '', password: ''}}
      validationSchema={Yup.object({
        correo: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const user = {
            "Correo": values.correo,
            "Nombres": "_",
            "Password": values.password,
            "Apellido": "_"
          }

          //axios.post('https://finanzasapirestful.azurewebsites.net/api/SignIn', {user})
          console.log(user);

          axios.post({
            method: 'post',
            url: 'https://finanzasapirestful.azurewebsites.net/api/SignIn',
            headers: {}, 
            data: {
              "Correo": values.correo,
              "Nombres": "_",
              "Password": values.password,
              "Apellido": "_"
            }})
          .then(res=>{
            console.log(res);
            setSubmitting(false);
            navigate('/calculate');
          }).catch(err=>{
            console.error(err);
          })
        }, 100);
      }}
    >
      <Form>
        <h3>Sign In</h3>
        
        <div className="mb-3">
          <label htmlFor="correo">Correo</label>
          <Field name="correo" type="email" className="form-control" placeholder="Correo"/>
          <ErrorMessage name="correo" />
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
