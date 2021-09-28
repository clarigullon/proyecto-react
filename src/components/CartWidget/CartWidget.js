import React from 'react'
import {Icon} from "semantic-ui-react"
import './CartWidget.css';
const CartWidget = () => {
    return (
        <div className="cartWidgetStyle">
            <Icon corner name='shopping cart'size='big'color='black'/>
        </div>
    )
}

export default CartWidget
