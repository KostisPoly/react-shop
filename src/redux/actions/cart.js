export const toggleHidden = () => ({
    type: 'TOGGLE_HIDDEN'
});

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const changeQuantity = (item, type) => ({
    type: 'CHANGE_QUANTITY',
    payload: Object.assign({}, item, {type})
})