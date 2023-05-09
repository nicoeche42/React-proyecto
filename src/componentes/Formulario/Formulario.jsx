import React from 'react'
import './Formulario.css'
import { useState } from 'react'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const handlerFormulario = (event) => {
        event.preventDefault();
       addDoc(collection(db, "usuarios"),{
            nombre: nombre,
            apellido: apellido,
       })
       
        const nuevoCliente = {nombre, apellido};
        console.log(nuevoCliente);

        setNombre("");
        setApellido("");
    }

    return (
    <form onSubmit={handlerFormulario}>
        <label htmlFor="">Nombre</label>
        <input type="text" id='nombre' value={nombre} onChange={(event)=>setNombre(event.target.value)} />
        <br />
        <label htmlFor="">Apellido</label>
        <input type="text" id='apellido' value={apellido} onChange={(event)=>setApellido(event.target.value)}/>
        
        <button type='submit'>Enviar datos</button>
    </form>
  )
}

export default Formulario