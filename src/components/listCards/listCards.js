import React from 'react'
import Cards from '../cards/cards'
import './listCards.css'

export default function ListCards() {
    const perros = [
        {producto: "PRODUCTO 1", precio: "$100.000", descripcion: "Aqui va la descripción"},
        {producto: "PRODUCTO 2", precio: "$100.000", descripcion: "Aqui va la descripción"},
        {producto: "PRODUCTO 3", precio: "$100.000", descripcion: "Aqui va la descripción"}]

  return (
    <div className='container-cards'>
        {perros.map((elm) => {
            return <Cards producto={elm.producto} precio={elm.precio} descripcion={elm.descripcion}/>
        })}

    </div>
  )
}
