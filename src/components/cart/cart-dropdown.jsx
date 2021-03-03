import React from 'react'
import ActionButton from '../action-button/action-button'
import './cart-dropdown.scss'

const CartDropdown = () =>  {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <ActionButton>BUY</ActionButton>
            </div>
        </div>
    )
}

export default CartDropdown;
