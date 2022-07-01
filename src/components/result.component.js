import React, { useState, useEffect } from 'react'
export default function Result() {
  const [result, getResult] = useState([])
  const API = '';
  const fetchResult = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getResult(res)
      })
  }
  useEffect(() => {
    fetchResult()
  }, [])
  return (
    <div className="mb-3">
      <h1 className='title'>Resultado</h1>
      <br></br>
      <h5>TIR_Emisor:</h5>
      <h5>TIR_Escudo:</h5>
      <h5>TIR_Bonista:</h5>
      <h5>Precio Bono:</h5>
      <h5>VAN:</h5>
    </div>
  )
}