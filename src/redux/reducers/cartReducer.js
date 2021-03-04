import { addToCart, removeFromCart, changeQuantity } from '../../utils/cart.utils'

const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        case 'REMOVE_ITEM':
            // console.log(action.payload);
            return {
                ...state,
                cartItems: removeFromCart(state.cartItems, action.payload)
            }
        case 'CHANGE_QUANTITY':
            // console.log(action.payload);
            return {
                ...state,
                cartItems: changeQuantity(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;