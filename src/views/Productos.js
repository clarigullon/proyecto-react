import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import './Views.css'
import Categorias from './Categorias'


const Productos = () => {
    return (
        <div >
            <Categorias />
            <ItemListContainer greeting="PRODUCTOS" />
            
        </div>
    )
}

export default Productos
