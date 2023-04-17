import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src="https://solaccursiopasteleria.netlify.app/public/image/logoSol2.png" alt="logoSolAccursioPasteleria" />
      <h1>Sol Accursio Pasteleria</h1>
      </Link>
      
      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/1`}>Postres</NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/2`}>Facturas</NavLink>
          </li>
          
        </ul>
      </nav>
      <CartWidget />

    </header>
  );
}

export default NavBar