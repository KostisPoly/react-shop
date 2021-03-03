import React from 'react'
import './collection.scss'
import CollectionItem from './collection-item'

const Collection = ({ title, items }) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((el, index) => index < 4 ).map((item) => {
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default Collection
