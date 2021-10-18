import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import './Views.css'
import {Link} from 'react-router-dom'

const Productos = () => {
    return (
        <div >
            <h3>Elija una categoría</h3>
            <Link to="/panificados" className="listaMenu">Panificados</Link>
            <Link to="/paraelte" className="listaMenu">Para El Te</Link>
            <Link to="/detail/id:'postres'" className="listaMenu">Postres</Link>
            <ItemListContainer greeting="PRODUCTOS" />
            
        </div>
    )
}

export default Productos
