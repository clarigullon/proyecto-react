import React, { useState} from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import Alert from './Alert'
const Cart = () => {
    const [vacio, setCartVacio] = useState(false);

    const cart = () => {
        setCartVacio(true)
    }
    return (
        <div> 
            
            {vacio ?   <Alert/> : <CartItem/>}
           
        </div>
    ) 
}

export default Cart
