import React from 'react'
import './collection.scss'
import CollectionItem from './collection-item'

const Collection = ({ title, items }) => {
    console.log(items);
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((el, index) => index < 4 ).map(({ id, name , price, imageUrl}) => {
                    return <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>
                })}
            </div>
        </div>
    )
}

export default Collection
