import React from 'react'
import './checkout.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selector'
import CheckoutItem from '../checkout/checkout-item'

const Checkout = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
                )
            }
            <div className="cart-total">
                <span>Total price: {cartTotal} &euro;</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);