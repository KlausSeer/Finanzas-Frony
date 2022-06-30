import React from "react";
import { useFormik } from "formik";
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "Required";
  } else if (values.user.length > 5) {
    errors.user = "Must be 5 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 6) {
    errors.password = "Must be 6 characters or less";
  }

  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user: "",
      password: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //api Login
      navigate("/calculate");
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>User Name</label>
        <input
          id="user"
          name="user"
          type="text"
          className="form-control"
          placeholder="User Name"
          onChange={formik.handleChange}
          value={formik.values.user}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
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
    </form>
  );
};

export default LoginForm;
