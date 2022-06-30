import React, { useState, useEffect } from 'react'
export default function Posts() {
  const [post, getPost] = useState([])
  const API = '';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      <h2>Resultado</h2>
      <ul>
        <li><text></text></li>
        <li><text></text></li>
        <li><text></text></li>
      </ul>
    </>
  )
}