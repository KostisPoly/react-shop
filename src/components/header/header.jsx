import React from 'react'

import { HeaderContainer, LogoContainer, LogoSvg, OptionsContainer, OptionDiv, OptionLink } from './header.styles'

import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import CartIcon from '../cart/cart-icon'
import CartDropdown from '../cart/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/selectors/user.selector'
import { selectCartHidden } from '../../redux/selectors/cart.selector'

const Header = ({ currentUser, hidden }) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <LogoSvg/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/contact">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin">
                    SIGN IN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown /> }
        </HeaderContainer>
    )
}

const mapSateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapSateToProps)(Header);