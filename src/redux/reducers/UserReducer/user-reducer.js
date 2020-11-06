import { UserTypes } from '../../types/user.types'

const INITIAL_STATE = {
    currentUser: null
}

const userreducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
       case UserTypes.SET_CURRENT_USER:
           return {
            ...state,
            currentUser: action.payload
           }
        default:
            return INITIAL_STATE;
   }
}

export default userreducer;