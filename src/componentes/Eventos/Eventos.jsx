import React from 'react'
import './Eventos.css'
import { useState } from 'react';


const Eventos = () => {
    const [input, setInput] = useState("");
    const manejadorClick = () => {
        console.log("Click");
    }

    const manejadorInput = (event) => {
        setInput(event.target.value);
        console.log(input);


    }


    return (
        <div>
            <button onClick={manejadorClick}> Haceme click</button>
            <div className="caja"
                onMouseMove={() => console.log("Nuevo Evento")}
                onMouseEnter={() => console.log("Entraste")}
                onMouseLeave={() => console.log("Saliste")}
            >
            </div>

            <form>
                <h2> {input} </h2>
                <label htmlFor="campo">Ingrese Texto</label>
                <input type="text" id='campo'
                onChange={ manejadorInput }
                onKeyDown={ () => console.log("Presionaste una tecla")}
                onKeyUp={ () => console.log("Soltaste una tecla")}
                />
            </form>
        </div>
    )
}

export default Eventos