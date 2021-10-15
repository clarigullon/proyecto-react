import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="NavBar">
                <ul>
                    <Link to="/" className="listaMenu">Home</Link>
                    <Link to="/productos" className="listaMenu">Productos</Link>
                    <Link to="/recetas" className="listaMenu">Recetas</Link>
                    <Link to="/preguntas" className="listaMenu">Preguntas</Link>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar
