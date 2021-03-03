import React from 'react'

import './cart-icon.scss'

import ShoppingIcon from './shopping-icon'

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

export default CartIcon;