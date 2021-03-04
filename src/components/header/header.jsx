import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import CartIcon from '../cart/cart-icon'
import CartDropdown from '../cart/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/selectors/user.selector'
import { selectCartHidden } from '../../redux/selectors/cart.selector'

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

const mapSateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapSateToProps)(Header);