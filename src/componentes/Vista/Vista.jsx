import React from 'react'
import './Vista.css'
import { useState } from 'react'

 const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);
    
    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className= {estilo}>
        <button onClick={ cambiarModo }> {modoOscuro ? "Claro" : "Oscuro"} </button>
        <h2>Componente Vista</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam excepturi aspernatur explicabo nemo corporis. Odio illum maiores, porro fugiat animi atque minus similique ut accusantium pariatur. Ex magnam a maxime.</p>
    </div>
  )
}
export default Vista