import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getproductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setproductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getproductos;



    funcionProductos(idCategoria)
      .then(res => setproductos(res))
      .catch(error => console.error(error))
  }, [idCategoria])


  return (
    <div>
      <h2 className='subtitulo'>{props.greeting} </h2>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer