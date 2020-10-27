import { combineReducers } from 'redux'
import userreducer from './reducers/UserReducer/user-reducer'

export default combineReducers({
    user: userreducer
})