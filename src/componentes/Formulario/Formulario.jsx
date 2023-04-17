import React from 'react'
import './Formulario.css'
import { useState } from 'react'


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const handlerFormulario = (event) => {
        event.preventDefault();
        const nuevoCliente = {nombre, apellido};
        console.log(nuevoCliente);

        setNombre("");
        setApellido("");
    }

    return (
    <form onSubmit={handlerFormulario}>
        <label htmlFor="">Nombre</label>
        <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre} />
        <br />
        <label htmlFor="">Apellido</label>
        <input type="text" id='apellido' onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
        
        <button type='submit'>Enviar datos</button>
    </form>
  )
}

export default Formulario