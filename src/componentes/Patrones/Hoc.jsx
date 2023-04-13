export const mensajeConTitulo = (Mensaje) => {
    return function(){
        return (
            <>
                <h2>Hola Mundo</h2>
                <Mensaje/>
            
            </>
        )
    }
}


export const conAumento = (Componente) => {
    return function({nombre, precio}) {
        const nuevoPrecio = precio + 500;
        return <Componente precio={nuevoPrecio} nombre={nombre} />
    }
}