import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import ItemData from '../../Data/data.json'

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
                    <div>
                        <Item item={item} key={item.id}/>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ItemList
