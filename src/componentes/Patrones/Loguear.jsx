import React from 'react'
import { useState } from 'react'
import InicioSesion from './InicioSesion';
import LoginButton from './LoginButton';


const Loguear = () => {
    const [usuario, setUsuario] = useState(null);

    const manejadorLogin = () => {
        setUsuario("Nicolas");
    }

  return (
    <div>
        {
            usuario ? (<InicioSesion nombre={usuario} /> ) : (<LoginButton Loguear={manejadorLogin} />)
        }
    </div>
  )
}

export default Loguear