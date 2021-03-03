import React from 'react'
import './collection-item.scss'
import ActionButton from '../action-button/action-button'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions/cart'

const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={
                    {backgroundImage: `url(${imageUrl})`}
                }
            >
            <ActionButton onClick={() => addItem(item)}>Add to cart</ActionButton>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);