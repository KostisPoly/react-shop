import cartReducer from './cartReducer'
import userReducer from './userReducer'
import directoryReducer from '../data/directory.reducer'
import shopReducer from './shopReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'//THIS PATH REPRESENTS LOCALSTORAGE CORESPONDING DIR

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']//Wich reducers to actually persist ( not auth use because of firebase persist )
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);