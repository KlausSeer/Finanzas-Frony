import React from "react";
import { useFormik } from "formik";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.VN) {
    errors.user = "Required";
  }

  if (!values.TNA) {
    errors.user = "Required";
  }

  if (!values.CAN) {
    errors.user = "Required";
  }

  return errors;
};

const CalculateForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      VN: "",
      TNA: "",
      CAN: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/result");
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Bonista</h3>

      <div className="mb-3">
        <label>Valor del Prestamo</label>
        <input
          id="VN"
          name="VN"
          type="number"
          className="form-control"
          placeholder="500000"
          onChange={formik.handleChange}
          value={formik.values.VN}
        />
      </div>

      <div className="mb-3">
        <label>Tasa Pactada TNA</label>
        <input
          id="TNA"
          name="TNA"
          type="number"
          className="form-control"
          placeholder="0.03"
          onChange={formik.handleChange}
          value={formik.values.TIR}
        />
      </div>

      <div className="mb-3">
        <label>Cantidad de Cuotas</label>
        <input
          id="CAN"
          name="CAN"
          type="number"
          className="form-control"
          placeholder="20"
          onChange={formik.handleChange}
          value={formik.values.CAN}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="button-primary">
          Calcular
        </button>
      </div>
    </form>
  );
};

export default CalculateForm;
