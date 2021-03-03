import React from 'react'

import './cart-icon.scss'
import { connect } from 'react-redux'
import ShoppingIcon from './shopping-icon'
import { toggleHidden } from '../../redux/actions/cart'

const CartIcon = ({ toggleHidden }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);