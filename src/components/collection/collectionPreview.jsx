import React from 'react'
import './collection-preview.scss'
import CollectionItem from './collection-item'
import { Link } from 'react-router-dom'

const CollectionPreview = ({ title, items, routeName }) => {

    return (
        <div className="collection-preview">
            <h1 className="title">
                <Link to={'/shop/'+routeName}>
                    {title} &#8618;
                </Link>
            </h1>
            <div className="preview">
                {items.filter((el, index) => index < 4 ).map((item) => {
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default CollectionPreview
