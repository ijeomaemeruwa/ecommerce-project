

const INITIAL_STATE = {
    currentUser: null
}

const userreducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
       case 'SET_CURRENT_USER':
           return {
            ...state,
            currentUser: action.payload
           }
        default:
            return INITIAL_STATE;
   }
}

export default userreducer;