import React, {useContext} from 'react'
import { CartContext } from './CartContext'
import { Card, Image } from 'semantic-ui-react'
const CartItem = () => {
    const {carrito, setCarrito, clearState, addItem, removeItem}=useContext(CartContext)
    return (
        <div> 
            <h2>Resumen de compra:</h2>
            {carrito.map((producto)=>{
                console.log(carrito, "esto tiene el carrito")
                return (
                    <Card key={producto.id} >
                    <Image src={producto.img} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header> {producto.nombre} </Card.Header>
                        <Card.Meta> {producto.id} </Card.Meta>
                        <Card.Description>{producto.descripcion}</Card.Description>
                        <Card.Description>{producto.cantidad}</Card.Description>
                        <Card.Content>${producto.precio}</Card.Content>
                        <Card.Content><button onClick={() => removeItem(producto.id)}>Eliminar Item</button></Card.Content>
                    </Card.Content>
                    </Card>
                )
            }
            )}
            
        <button onClick={clearState}>Limpiar Carrito</button>
        
        </div>
    ) 
}

export default CartItem