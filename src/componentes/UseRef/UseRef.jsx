import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    
    const contadorCarrito = useRef(0);
    
    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <p>Poductos en el carrito: {contadorCarrito.current} </p>
        <button onClick={ agregarAlCarrito}> Agregar al Carrito </button>
    </div>
  )
}
 
export default UseRef