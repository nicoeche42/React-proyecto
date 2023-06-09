import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <>
                <h2 className='cart-title'>No hay productos en el carrito 😢😢</h2>
                <Link to='/' className='cart-title'>Agrega Productos al carrito 👍🤝</Link>
            </>
        )
    }
    return (
        <div className='cart-container'>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3 className='cart-footer'>Total: ${total} </h3>
            <button className='cart-footer-button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/checkout' className='cart-footer-button'>Finalizar Compra</Link>
        </div>
    )

}

export default Cart