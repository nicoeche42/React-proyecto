import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    let inicial = 1;
    let maximo = 10;
    
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < maximo)
        setContador(contador + 1);
    }

    const decrementar = () => {
        if(contador > inicial)
        setContador(contador - 1);
    }
  return (
    <>
        <button onClick={ incrementar }>+</button>
        <p> {contador} </p>
        <button onClick={ decrementar }>-</button>
    </>
  )
}

export default ItemCount