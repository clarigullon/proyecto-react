import React from 'react'
import {Link} from 'react-router-dom'
const Categorias = () => {
    return (
        <div>
            <h3>Elija una categoría</h3>
            <Link to={`/category/${'panificados'}`} className="listaMenu">Panificados</Link>
            <Link to={`/category/${'paraelte'}`} className="listaMenu">Para El Te</Link>
            <Link to={`/category/${'postres'}`} className="listaMenu">Postres</Link>
        </div>
    )
}

export default Categorias
