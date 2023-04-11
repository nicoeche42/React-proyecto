import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et dolorem? Suscipit, recusandae omnis eum quod delectus quam consequuntur, impedit laborum, at accusantium quae? Doloremque, quas! Rem labore ad cupiditate.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail