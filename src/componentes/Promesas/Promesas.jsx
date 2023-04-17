import React from 'react'

const Promesas = () => {

    setTimeout(() => {
        console.log("Tarea A");
    }, 100)
    setTimeout(() => {
        console.log("Tarea B");
    }, 1000)

    const tusPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("Promesa cumplida")
            } else {
                reject("Promesa rechazada")
            }
        })
    }


    console.log(tusPromesas(true));
    //console.log(tusPromesas(false));

    tusPromesas(true)
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })

    const array = ["Tinki", "Lala", "Po", "Dipsy"];

    const solicitarTeletubbies = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if (estado) {
                resuelto(array);
            } else {
                rechazado("No hay teletubbies")
            }
        })
    }

    solicitarTeletubbies(false)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.error(error))
        .finally(() => console.log("Proceso terminado"))



    return (
        <div>

        </div>
    )
}

export default Promesas