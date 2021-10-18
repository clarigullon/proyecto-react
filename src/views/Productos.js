import React from 'react'
import ItemList from '../components/ItemListContainer/ItemList/ItemList'
import './Views.css'
import Categorias from './Categorias'



const Productos = () => {
    return (
        <div >
            <Categorias />
            <h1>Productos</h1>
            <ItemList/>
            
        </div>
    )
}

export default Productos


