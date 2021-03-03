import React from 'react'
import ActionButton from '../action-button/action-button'
import './cart-dropdown.scss'
import CartItem from './cart-item'
import {connect} from 'react-redux'

const CartDropdown = ({cartItems}) =>  {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                
                }
                
            </div>
            <ActionButton>BUY</ActionButton>
        </div>
    )
}

const mapStateToProps =  ({cart}) => ({
    cartItems: cart.cartItems
})


export default connect(mapStateToProps)(CartDropdown);