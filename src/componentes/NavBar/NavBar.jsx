import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className='imgLogo' src="https://solaccursiopasteleria.netlify.app/public/image/logoSol2.png" alt="logoSolAccursioPasteleria" />
        <h1  className='btn-cat'>Sol Accursio Pasteleria</h1>
      </Link>
      <ul>
        <li className='btn-cat'>
          <NavLink to={`/categoria/1`}>Facturas</NavLink>
        </li>
        <li className='btn-cat'>
          <NavLink to={`/categoria/2`}>Tortas</NavLink>
        </li>
        <li className='btn-cat'>
          <NavLink to={`/categoria/3`}>Masitas</NavLink>
        </li>
        <li className='btn-cat'>
          <NavLink to={`/categoria/4`}>Budines</NavLink>
        </li>
      </ul>
      <CartWidget />

    </header>
  );
}

export default NavBar