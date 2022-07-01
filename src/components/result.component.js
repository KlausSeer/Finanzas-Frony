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
    <>
      <h2>Resultado</h2>
      <br></br>
      <h3>TIR:</h3>
      <h3>VAN:</h3>
    </>
  )
}