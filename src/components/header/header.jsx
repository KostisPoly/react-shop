import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import CartIcon from '../cart/cart-icon'
import CartDropdown from '../cart/cart-dropdown'

const Header = ({ currentUser, hidden }) => {

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
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                    SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    )
}

const mapSateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapSateToProps)(Header);