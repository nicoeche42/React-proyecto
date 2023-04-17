const productos = [
    { id: "1", nombre: "Medialunas", precio: 200, stock:10, img: "../img/medialunas.jpg", idCat: "2" },
    { id: "2", nombre: "Lemon Pie", precio: 500, stock:8, img: "../img/lemonPie.jpg", idCat: "1" },
    { id: "3", nombre: "Cookies", precio: 100, stock:6, img: "../img/cookies.jpg", idCat: "2" },
    { id: "4", nombre: "Macarons", precio: 300, stock:4, img: "../img/macarons.jpg", idCat: "1" },
]

export const getproductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })

}