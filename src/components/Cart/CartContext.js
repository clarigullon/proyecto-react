import React, {createContext, useEffect, useState} from 'react'


export const CartContext = createContext();

export const ItemsProvider = ({children}) => {
    
    const [productos, setProductos] = useState([]);
    const addItem = (producto, cantidad) => {
        console.log("hola item")

        if (localStorage.getItem("MiCarrito") !== null) {
            setProductos(JSON.parse(localStorage.getItem("MiCarrito")))
        }
       
        if (productos.lenght){
            const productoClickeado = productos.filter((e) => e.id === producto.id)
            if (productoClickeado !== null){
                productoClickeado.cantidad += cantidad
            } else {
                const productoAgregado = {"id" : producto.id, "cantidad": cantidad}
                productos.push(productoAgregado)
            }
        } else {
            const productoNuevo = {"id": producto.id, "cantidad": cantidad}
            productos.push(productoNuevo)

        } 
        (localStorage.setItem("MiCarrito", JSON.stringify(productos)))
    }

    
    const removeItem = (producto) => {
        if (productos.lenght){
            const indexOf = productos.indexOf((e) => e.id === producto.id)
            if (indexOf > -1){
                productos.slice(indexOf, 1)
            } 
        } 
    }
    const clearState = () => {
        setProductos ([])
    }
    return (
        <CartContext.Provider value={[productos, setProductos, clearState, addItem, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}

export default ItemsProvider
