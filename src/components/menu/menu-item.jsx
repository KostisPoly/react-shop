import React from 'react'
import './menu-item.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, history}) => {
    
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

export default withRouter(MenuItem);
