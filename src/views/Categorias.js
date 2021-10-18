import React from 'react'
import {Link} from 'react-router-dom'
const Categorias = () => {
    return (
        <div>
            <h3>Elija una categoría</h3>
            <Link to="/panificados" className="listaMenu">Panificados</Link>
            <Link to="/paraelte" className="listaMenu">Para El Te</Link>
            <Link to="/detail/:id/postres" className="listaMenu">Postres</Link>
        </div>
    )
}

export default Categorias
