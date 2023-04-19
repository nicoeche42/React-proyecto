import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <p>Nombre: {nombre} </p>
      <p>Precio: {precio} </p>
      <p>ID: {id} </p>
    <Link to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item