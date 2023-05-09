import React from 'react'
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where, doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebase/config';


const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"));

        const modificar = onSnapshot(misProductos, function (querySnapShot) {
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setProductos(docs);
        });
        return () => {
            modificar();
        };

    }, []);



const manejadorCompra = (id, stock) => {
    if (stock > 0) {
        const productoRef = doc(db, "productos", id);
        updateDoc(productoRef, {
            stock: stock - 1,
        })
            .then(() => {
                console.log("el stock se actualizo correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
    }
}



return (

    <div className="productos">
        {
            productos.map((producto) => (

                <div className="producto" key={producto.id}>
                    <h2>Nombre: {producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock} </p>
                    <button onClick={() => manejadorCompra(producto.id, producto.stock)}>Agregar al carrito</button>
                </div>
            ))
        }

    </div>
)
}

export default Productos