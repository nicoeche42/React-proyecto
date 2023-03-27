import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1>Sol Accursio Pasteleria</h1>
      <nav>
        <ul>
          <li>Tortas</li>
          <li>Regalos</li>
          <li>Bombones</li>
        </ul>
      </nav>
      <CartWidget />

    </header>
  );
}

export default NavBar