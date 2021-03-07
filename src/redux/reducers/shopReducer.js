const INITIAL_STATE = {
    collections: [],
    isFetching: false,
    error: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FETCH_SHOP_DATA_START':
            return{
                ...state,
                isFetching: true
            };
        case 'FETCH_SHOP_DATA_SUCCESS':
            return{
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case 'FETCH_COLLECTION_DATA_SUCCESS':
            return{
                ...state,
                isFetching: false,
                collection: action.payload
            };
        case 'FETCH_SHOP_DATA_FAIL':
            return{
                ...state,
                isFetching: false,
                error: action.payload //On fail catch error pass to payload
            };
        default:
            return state;
    }
}

export default shopReducer;