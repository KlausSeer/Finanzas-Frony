import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ VN: '', TNA: '', CAN: ''}}
      validationSchema={Yup.object({
        VN: Yup.number()
          .required('Required'),
        TN: Yup.string()
          .required('Required'),
        CAN: Yup.string()
        .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          navigate('/result');
        }, 400);
      }}
    >
      <Form>
        <h3>Sign In</h3>
        
        <div className="mb-3">
          <label htmlFor="VN">Valor del Prestamo</label>
          <Field name="VN" type="number" className="form-control" placeholder="500000"/>
          <ErrorMessage name="VN" />
        </div>

        <div className="mb-3">
          <label htmlFor="TNA">Tasa Pactada (TNA)</label>
          <Field name="TNA" type="number" className="form-control" placeholder="0.03"/>
          <ErrorMessage name="TNA" />
        </div>

        <div className="mb-3">
          <label htmlFor="CAN">Cantidad de Cuotas</label>
          <Field name="CAN" type="number" className="form-control" placeholder="20"/>
          <ErrorMessage name="CAN" />
        </div>

        <div className="d-grid">
          <button type="submit" className="button-primary">
            Calculate
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
