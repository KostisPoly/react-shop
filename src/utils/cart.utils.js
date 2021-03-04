export const addToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(//Returns item found on filter func or undefined
        cartItem => cartItem.id === itemToAdd.id
    );
        
    if(existingCartItem) {//If is found return that item ++quantity
        
        return cartItems.map(
            cartItem => cartItem.id === itemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            :  cartItem 
        );
    }
    
    //If not return items plus item with prop quantity set to 1
    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter( cartItem => 
        cartItem.id !== itemToRemove.id
    );
}