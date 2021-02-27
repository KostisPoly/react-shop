import React from 'react'
import './action-button.scss'

const ActionButton = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default ActionButton;