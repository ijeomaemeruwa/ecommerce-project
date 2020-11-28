import { combineReducers } from 'redux'
import userreducer from './reducers/UserReducer/user-reducer'
import CartReducer from '../redux/reducers/CartReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userreducer,
    cart: CartReducer
})

export default persistReducer(persistConfig, rootReducer);