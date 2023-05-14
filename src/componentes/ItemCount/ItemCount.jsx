import './ItemCount.css';
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
        <div>
            <button onClick={decrementar} className='btn-item-count'>-</button>
            <p> {contador} </p>
            <button onClick={incrementar} className='btn-item-count'>+</button>
        </div>
        <button onClick={()=> funcionAgregar(contador)} className='btn-item-count'>Agregar Al Carrito</button>

        </>
    )
}

export default ItemCount