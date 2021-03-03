export const addToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(//Returns item found on filter func or undefined
        cartItem => cartItem.id === itemToAdd.id
    );

    if(existingCartItem) {//If is found return that item ++quantity
        return cartItems.map(
            cartItem => cartItem.id === itemToAdd.id 
            ? { ...cartItem, quantity:cartItem.quantity + 1 } 
            : { cartItem }
        );
    }
    //If not resturn items plus item with prop quantity set to 1
    return [...cartItems, {...itemToAdd, quantity: 1}]
}