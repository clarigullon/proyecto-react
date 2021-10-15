import React from 'react'
import img from './logo.png';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>
				<img src={img} alt='logo' />
			</Link>
        </div>
    )
}

export default Header
