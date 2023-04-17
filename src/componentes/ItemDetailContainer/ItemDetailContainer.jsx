import React from 'react'
import { getUnProducto } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Contador from '../Contador/Contador'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
            <Contador stock={10} inicial={1} />
        </div>
    )
}

export default ItemDetailContainer