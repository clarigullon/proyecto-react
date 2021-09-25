import React from 'react'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="NavBar">
                <ul className="listaMenu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="recetas.html">Recetas</a></li>
                    <li><a href="preguntas-frecuentes.html">Preguntas Frecuentes</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
