import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [])


  return (
    <div>
      <h2 className='subtitulo'>{props.greeting} </h2>
      <h2>Productos</h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer