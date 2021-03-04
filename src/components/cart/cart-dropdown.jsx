import React from 'react'
import ActionButton from '../action-button/action-button'
import './cart-dropdown.scss'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({cartItems, history}) =>  {
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                
                }
                
            </div>
            <ActionButton onClick={() => history.push('/checkout')}>BUY</ActionButton>
        </div>
    )
}

const mapStateToProps =  ({cart: {cartItems} }) => ({
    cartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));