import React from 'react'
import './ItemListContainer.css'
import './ItemList/ItemList'
import ItemList from './ItemList/ItemList'

const ItemListContainer = (props) => {
    return (
        <div>
            <div className="ItemListContainer">
                <h1>{props.greeting}</h1>
            </div>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
