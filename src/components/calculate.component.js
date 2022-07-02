import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ 
        VN : '',
        VC : '',
        TC : '',
        Plazo : '',
        TIM : '',
        PR : '',
        ESTR : '',
        COL : '',
        FLO : '',
        CAV : '',
        GA : '',
        INF : '',

      }}
      validationSchema={Yup.object({
        VN : Yup.string().required('Required'),
        VC : Yup.string().required('Required'),
        TC : Yup.string().required('Required'),
        Plazo : Yup.string().required('Required'),
        TIM : Yup.string().required('Required'),
        PR : Yup.string().required('Required'),
        ESTR : Yup.string().required('Required'),
        COL : Yup.string().required('Required'),
        FLO : Yup.string().required('Required'),
        CAV : Yup.string().required('Required'),
        GA : Yup.string().required('Required'),
        INF : Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const calcu = JSON.stringify({
              "ValorNominal": parseFloat(values.VN),
              "ValorComercial": parseFloat(values.VC),
              "Plazo": parseFloat(values.Plazo),
              "Cupon":parseFloat(values.TC),
              "TasaInteresMercado": parseFloat(values.TIM),
              "PrimaRedencion": parseFloat(values.PM),
              "Estructuracion": parseFloat(values.ESTR),
              "Colocacion": parseFloat(values.COL),
              "Flotacion" : parseFloat(values.FLO),
              "Cavali" : parseFloat(values.CAV),
              "GastosAdicionales" : parseFloat(values.GA),
              "InflacionAnual" : parseFloat(values.INF),
              "IdUsuario": 1,
              "IdFrecuencia": 1
          })

          console.log(calcu);

          
          // axios.post({
          //   method: 'post',
          //   url: 'https://finanzasapirestful.azurewebsites.net/api/DatosBonos',
          //   headers: {}, 
          //   data: {
          //     "ValorNominal": parseFloat(values.VN),
          //     "ValorComercial": parseFloat(values.VC),
          //     "Plazo": parseFloat(values.Plazo),
          //     "Cupon":parseFloat(values.TC),
          //     "TasaInteresMercado": parseFloat(values.TIM),
          //     "PrimaRedencion": parseFloat(values.PM),
          //     "Estructuracion": parseFloat(values.ESTR),
          //     "Colocacion": parseFloat(values.COL),
          //     "Flotacion" : parseFloat(values.FLO),
          //     "Cavali" : parseFloat(values.CAV),
          //     "GastosAdicionales" : parseFloat(values.GA),
          //     "InflacionAnual" : parseFloat(values.INF),
          //     "IdUsuario": 1,
          //     "IdFrecuencia": 1
          //   }})
          axios.post('https://finanzasapirestful.azurewebsites.net/api/DatosBonos', {calcu})
          .then(res=>{
            console.log(res);
            setSubmitting(false);
            navigate('/result');
          }).catch(err=>{
            console.error(err);
          })
        }, 100);
      }}
    >
      <Form>
        <h4>Bonista</h4>
        
        <div>
          <label htmlFor="VN">Valor Nominal del Bono</label>
          <Field name="VN" type="number" className="form-control"/>
          <ErrorMessage name="VN" />
        </div>
        
        <div>
          <label htmlFor="VC">Valor Comercial del Bono</label>
          <Field name="VC" type="number" className="form-control"/>
          <ErrorMessage name="VC" />
        </div>
        
        <div>
          <label htmlFor="TC">Tasa del Cupon</label>
          <Field name="TC" type="number" className="form-control"/>
          <ErrorMessage name="TC" />
        </div>
        
        <div>
          <label htmlFor="Plazo">Plazo (Años)</label>
          <Field name="Plazo" type="number" className="form-control"/>
          <ErrorMessage name="Plazo" />
        </div>
        
        <div>
          <label htmlFor="TIM">Tasa Interes de Mercado (Anual)</label>
          <Field name="TIM" type="number" className="form-control"/>
          <ErrorMessage name="TIM" />
        </div>
        
        <div>
          <label htmlFor="PR">Prima Redencion</label>
          <Field name="PR" type="number" className="form-control"/>
          <ErrorMessage name="PR" />
        </div>
        
        <div>
          <label htmlFor="ESTR">Estructuracion</label>
          <Field name="ESTR" type="number" className="form-control"/>
          <ErrorMessage name="ESTR" />
        </div>
        
        <div>
          <label htmlFor="COL">Colocacion</label>
          <Field name="COL" type="number" className="form-control"/>
          <ErrorMessage name="COL" />
        </div>
        
        <div>
          <label htmlFor="FLO">Flotacion</label>
          <Field name="FLO" type="number" className="form-control"/>
          <ErrorMessage name="FLO" />
        </div>
        
        <div>
          <label htmlFor="CAV">Cavali</label>
          <Field name="CAV" type="number" className="form-control"/>
          <ErrorMessage name="CAV" />
        </div>
        
        <div>
          <label htmlFor="GA">Gastos Adicionales</label>
          <Field name="GA" type="number" className="form-control"/>
          <ErrorMessage name="GA" />
        </div>
        
        <div>
          <label htmlFor="INF">Inflacion (Anual)</label>
          <Field name="INF" type="number" className="form-control"/>
          <ErrorMessage name="INF" />
        </div>

        <div>
          <label htmlFor="Frecuencia">Frecuencia de Pago: Anual</label>
        </div>

        <div className="d-grid">
          <button type="submit" className="button-primary">
            Calcular
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
