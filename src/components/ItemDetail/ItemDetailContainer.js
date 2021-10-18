import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemsData from '../Data/data.json';
import ItemDetail from './ItemDetail';
import Categorias from '../../views/Categorias'


const ItemDetailContainer = ({match}) => {
    console.log("MATCH", match)
    let ItemId = match.params.id;

    const [item, setItem] = useState ([]);

    useEffect(() => {
        const getData = new Promise ((response) => {
           response (ItemsData.filter(producto => producto.id == ItemId));
        }) ;
        getData.then((data) => {
            setItem (data);
        })
    },[ItemId]) ;
  
    return (
        <div className="ItemDetailContainer">
             <Categorias />
            {item.map((producto)=> {
                return (
                    <ItemDetail producto={producto}/>
                    
                )
            }
            )}
        </div>
    )
}

export default ItemDetailContainer