import React, {createContext, useState} from 'react'


export const CartContext = createContext();

export const ItemsProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);
    
    console.log(carrito, "esto es lo que voy agregando")
    const addItem = (producto, cantidad) => {
        console.log("hola item")
       
        if (carrito.lenght){
            const productoClickeado = carrito.filter((e) => e.id === producto.id)
            if (productoClickeado !== null){
                productoClickeado.cantidad += cantidad
            } else {
                const productoAgregado = {"id" : producto.id, "cantidad": cantidad}
                carrito.push(productoAgregado)
            }
        } else {
            const productoNuevo = {"id": producto.id, "cantidad": cantidad}
            carrito.push(productoNuevo)

        } 
        
    }

    
    const removeItem = (producto) => {
        if (carrito.lenght){
            const indexOf = carrito.indexOf((e) => e.id === producto.id)
            if (indexOf > -1){
                carrito.slice(indexOf, 1)
            } 
        } 
    }
    const clearState = () => {
        setCarrito ([])
    }
    return (
        <CartContext.Provider value={{carrito: carrito, setCarrito: setCarrito, 
        clearState: clearState, 
        addItem: addItem, 
        removeItem: removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default ItemsProvider
