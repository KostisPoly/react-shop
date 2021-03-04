import React from 'react'
import ActionButton from '../action-button/action-button'
import './cart-dropdown.scss'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleHidden } from '../../redux/actions/cart'
import { selectCartItems } from "../../redux/selectors/cart.selector";
import { createStructuredSelector} from "reselect";

const CartDropdown = ({cartItems, history, dispatch }) =>  {
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                
                }
                
            </div>
            <ActionButton 
                onClick={
                    () => {
                        history.push('/checkout')
                        dispatch(toggleHidden())
                    }
                }
            >
            BUY
            </ActionButton>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));