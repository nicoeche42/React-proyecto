import React from 'react'

const Escuchadores = () => {
    window.addEventListener("resize", ()=>console.log("cambiaste el tamaño"));

    window.addEventListener("click", ()=>console.log("click"));

  return (
    <div>

    </div>
  )
}

export default Escuchadores