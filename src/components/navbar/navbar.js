import React from 'react'
import './navbar.css'
import CardWidget from '../cardWidget/cardWidget'
import SalchiLogo from './assets/salchi-logo.jpg'

export default function Navbar() {
  return (
    <div className='navbar'>

      <div className='logo-nombre'>
      <img src={SalchiLogo} alt='logo salchi'className='salchi-logo'></img>
      <h3 className='navbar-nombre'>SALCHI STORE</h3>
      <img src={SalchiLogo} alt='logo salchi'className='salchi-logo'></img>
      </div>
    
      <nav className='navbar-items'>
        <div className='botones-nav'>
          <button className='btn-nav'>INICIO</button>
          <button className='btn-nav'>PROMOS</button>
          <button className='btn-nav'>CONTACTO</button>
        </div>
        <CardWidget/>
      </nav>
    </div>
  )
}
