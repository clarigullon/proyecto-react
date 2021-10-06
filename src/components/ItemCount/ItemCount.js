import React from 'react'
import './ItemCount.css'
const ItemCount = ({stock, initial}) => {
    const [counter, setCounter]=React.useState(parseInt(initial));
    const incrementar = () => {
        if (counter < stock){
            setCounter (counter +1)
        }
    };
    const decrementar = () => {
        if (counter > 0){
            setCounter (counter -1)
        }
        
    };
    const onAdd = () => {
        if (counter > 0){
            alert("Felicitaciones! Usted ha agregado " + counter + " producto/s al carrito")
        }
        
    }
    return (
        <div>
        <div className="contador">
            <button onClick={incrementar}className="botonesContador">+</button>
            <h3>{counter}</h3>
            <button onClick={decrementar}className="botonesContador">-</button>
        
        </div>
            <div className="btn-agregar"> 
                <button onClick={onAdd} >AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount
