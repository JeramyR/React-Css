import { 
    AUTH_CHANGE, AUTH_LOGIN_MODAL, 
    AUTH_LOGIN_SUCCESS, SEND_MESSAGE, 
    LOGOUT_SUCCESS, ADMIN_LOGIN_SUCCESS,
    MOVE_FACE

} from '../types'

export const authChange = input => {
    return {
        type: AUTH_CHANGE,
        payload: input
    }
}

export const authLoginModal = () => {
    return {
        type: AUTH_LOGIN_MODAL
    }
}

export const authloginSuccess = () => {
    return {
        type: AUTH_LOGIN_SUCCESS,
    }
}

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

export const logoutSuccess = message => {
    return {
        type: LOGOUT_SUCCESS,
        payload: message
    }
}

export const adminLoggedSuccess = flag => {
    return {
        type: ADMIN_LOGIN_SUCCESS,
        payload: flag
    }
}

export const moveFace = () => {
    return {
        type: MOVE_FACE
    }
}