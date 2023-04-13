import React from 'react'
import { useContador, useFetch } from './customhook'

const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador(1, 10);

    const data = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={decrementar}> - </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> + </button>
        
        <hr />

        <h2>Fetch de datos</h2>
        {data && data.map((usuario) => <p key={usuario.id}> {usuario.name} </p>)}
    </div>
  )
}

export default Hooks