import { createSelector } from 'reselect'

const selectCart = state => state.cart;//Input selector - always a piece of state

export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0
    )//Using reduce to return overall quantity always start at
    
)