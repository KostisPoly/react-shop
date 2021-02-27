import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { AiOutlineHome } from 'react-icons/ai'

const Header = () => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <AiOutlineHome />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                <Link className="option" to="/signin">
                    SIGNIN
                </Link>
            </div>
        </div>
    )
}

export default Header;