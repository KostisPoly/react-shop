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

export const changeQuantity = (cartItems, itemToChange) => {
    
    const existingCartItem = cartItems.find(//Returns item found on filter func or undefined
        cartItem => cartItem.id === itemToChange.id
    );
    
    if (existingCartItem.quantity === 1 && itemToChange.type === 'decrease'){
        return cartItems.filter( cartItem =>
            cartItem.id !== itemToChange.id
        );
    }

    // return cartItems.map(
    //     cartItem => cartItem.id === itemToChange.id && itemToChange.type === 'decrease'
    //     ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //     : { ...cartItem, quantity: cartItem.quantity + 1 } 
    // );
    
    return cartItems.map((cartItem) => {
        if(cartItem.id === itemToChange.id && itemToChange.type === 'decrease'){
            return { ...cartItem, quantity: cartItem.quantity - 1 }
        }else if (cartItem.id === itemToChange.id && itemToChange.type === 'increase') {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
                return cartItem;
        }
        
    });
}