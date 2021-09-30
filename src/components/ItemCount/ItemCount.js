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
        <div className="contador">
            <h2>CONTADOR CON BOTÓN</h2>
            <div>
                <button onClick={incrementar}className="botonesContador">+</button>
                <h3>{counter}</h3>
                <button onClick={decrementar}className="botonesContador">-</button>
                <button onClick={onAdd} className="btn-agregar">AGREGAR AL CARRITO</button>
            </div>
            
        </div>
    )
}

export default ItemCount
