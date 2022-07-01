import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const SignupForm = () => {
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
          
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          navigate('/sign-in');
        }, 400);
      }}
    >
      <Form>
        <h3>Sign Up</h3>
        
        <div className="mb-3">
          <label htmlFor="user">First Name</label>
          <Field name="user" type="text" className="form-control" placeholder="User Name"/>
          <ErrorMessage name="user" />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <Field name="password" type="text" className="form-control" placeholder="Enter Password" />
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
