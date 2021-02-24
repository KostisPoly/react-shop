import React from 'react'
import './manu-item.scss'

const MenuItem = ({ title, imageUrl}) => {
    console.log(imageUrl);
    return (
        <div className="menu-item">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="suctitle">Shop Now</span>
            </div>
        </div>
        
    )
}

export default MenuItem;
