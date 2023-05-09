import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <p> {nombre} </p>
      <p> $ {precio} </p>
      <img className='imgProducto' src={img} alt={nombre} />
    <Link to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item