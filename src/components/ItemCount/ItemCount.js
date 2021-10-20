import './ItemCount.css'
import React, { useState } from 'react';
const ItemCount = (props) => {
    const [counter, setCounter]=React.useState(parseInt(props.valorInicial));
    const [stockProd, setStockProd]=useState(parseInt(props.stock));
    const incrementar = () => {
        if (counter < stockProd){
            setCounter (counter +1)
        }
    };
    const decrementar = () => {
        if (counter > 0){
            setCounter (counter -1)
        }
        
    };
    
    return (
        <div>
        <div className="contador">
            <button onClick={incrementar}className="botonesContador">+</button>
            <h3>{counter}</h3>
            <button onClick={decrementar}className="botonesContador">-</button>
        
        </div>
            <div className="btn-agregar"> 
                <button onClick={()=> props.onClick(counter)} >AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount
