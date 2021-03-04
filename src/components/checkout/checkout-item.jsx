import React from 'react'
import './checkout-item.scss'
import { connect } from 'react-redux'
import { removeItem, changeQuantity } from '../../redux/actions/cart'


const CheckoutItem = ({ cartItem, removeItem, changeQuantity }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => changeQuantity(cartItem,'decrease')}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => changeQuantity(cartItem,'increase')}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div 
                className="remove-button" 
                onClick={() => removeItem(cartItem)}
            >
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    changeQuantity: (item, type) => dispatch(changeQuantity(item, type))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)