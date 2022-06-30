import React from "react";
import { useFormik } from "formik";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

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

const SignupForm = () => {
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
      navigate("/sign-up");
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign Up</h3>

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

      <div className="d-grid">
        <button type="submit" className="button-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default SignupForm;
