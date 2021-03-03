import React from 'react'

import './cart-icon.scss'
import { connect } from 'react-redux'
import ShoppingIcon from './shopping-icon'
import { toggleHidden } from '../../redux/actions/cart'
import { selectCartItemsCount } from '../../redux/selectors/cart.selector'

const CartIcon = ({ toggleHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
});

const mapStateToProps = state => {
    return {itemCount: selectCartItemsCount(state)}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);