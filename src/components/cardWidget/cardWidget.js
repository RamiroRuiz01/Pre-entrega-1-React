import React from 'react'
import logocarrito from './assets/carrito-compras.jpg'
import './cardWidget.css'

export default function CardWidget() {
return (
    <div>
        <img src={logocarrito} alt='carro de compras' className='carro-de-compras'></img>
        0
    </div>
)
}