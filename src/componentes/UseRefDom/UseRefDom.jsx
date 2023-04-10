import React from 'react'
import { useRef } from 'react'
const UseRefDom = () => {
    const ref = useRef(null);
    const handleClick = () => {
        if(ref.current) {
            ref.current.textContent = "Este texto fue modificado con useRef";
        }
    }
    return (
    <div>
        <h2>UseRef DOM</h2>
        <p ref={ref}>Este hook nos permite acceder a elementos del DOM y modificarlos</p>
        <h3>Modifico este texto</h3>
        <button onClick={ handleClick}>Hace click para modificar el DOM</button>
    </div>
  )
}

export default UseRefDom