import { combineReducers } from 'redux'
import userreducer from './reducers/UserReducer/user-reducer'
import CartReducer from '../redux/reducers/CartReducer'

export default combineReducers({
    user: userreducer,
    cart: CartReducer
})