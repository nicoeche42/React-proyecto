const products = [
    {nombre: "Medialunas", precio: 200, id: 1, img: "./img/medialunas.jpg"},
    {nombre: "Brownie", precio: 500, id: 2, img: "./img/brownie.png"},
    {nombre: "Cookies", precio: 100, id: 3, img: "./img/cookies.jpg"},
    {nombre: "Macarons", precio: 300, id: 4, img: "./img/macarons.jpg"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve=> {
        setTimeout( ()=> {
            const producto = products.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}