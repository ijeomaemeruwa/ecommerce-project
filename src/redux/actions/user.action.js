import { UserTypes } from '../types/user.types'

export const setCurrentUser = user => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
})