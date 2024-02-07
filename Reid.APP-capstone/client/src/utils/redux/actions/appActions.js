import { USER_LANDING, HANDLE_CHANGE, GENERAL_LANDING, ADD_DROP, ADD_UP } from '../types'

export const userLanding = user => {
    return {
        type: USER_LANDING,
        payload: user
    }
}

export const handleChange = input => {
    return {
        type: HANDLE_CHANGE,
        payload: input
    }
}

export const generalLanding = users => {
    return {
        type: GENERAL_LANDING,
        payload: users
    }
}
export const addDrop = () => {
    return {
        type: ADD_DROP
    }
}
export const addUp = () => {
    return {
        type: ADD_UP
    }
}