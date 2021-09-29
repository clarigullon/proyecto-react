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
        if (counter > 1){
            setCounter (counter -1)
        }
        
    };
    return (
        <div className="contador">
            <h2>CONTADOR CON BOTÓN</h2>
            <div>
                <button onClick={incrementar}className="botonesContador">+</button>
                <h3>{counter}</h3>
                <button onClick={decrementar}className="botonesContador">-</button>
            </div>
            
        </div>
    )
}

export default ItemCount
