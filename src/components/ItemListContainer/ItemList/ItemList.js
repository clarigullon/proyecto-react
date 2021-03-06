import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import ItemData from '../../Data/data.json'
import {Link} from 'react-router-dom'

const ItemList = () => {
    const [items, setItems]=useState([]);

    
    useEffect(() => {
        const promList = new Promise ((resolve) => {
            setTimeout(()=> {
                resolve (ItemData);
            },2000);
        });

        promList.then ((response) => {
            setItems (response);
        })
        
    })
    
    return (
        <div className="ItemList">
            {items.map((item)=>{
                return (
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                        <Item item={item} key={item.id}/>
                        </Link>
                    </div>
                    
                )
            }
            )}
               

        </div>
    )
}

export default ItemList
