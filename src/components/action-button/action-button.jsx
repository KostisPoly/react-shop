import React from 'react'
import './action-button.scss'

const ActionButton = ({ children, googleBtn, ...otherProps }) => {
    return (
        <button className={`${googleBtn ? 'google-btn' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default ActionButton;