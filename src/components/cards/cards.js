import React from 'react'
import './cards.css'

export default function Cards({producto, precio, descripcion}) {
  return (
    <div className='card'>
        <h5>{producto}</h5>
        <p>{precio}</p>
        <p>{descripcion}</p>


    </div>
  )
}