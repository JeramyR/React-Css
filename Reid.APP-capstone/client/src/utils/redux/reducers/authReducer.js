import {
    AUTH_CHANGE, AUTH_LOGIN_MODAL, AUTH_LOGIN_SUCCESS,
    SEND_MESSAGE, LOGOUT_SUCCESS, ADMIN_LOGIN_SUCCESS,
    MOVE_FACE

} from '../types'

let initialState = {
    isAuth: false,
    message: '',

    firstName: '',
    lastName: '',
    email: '',
    pw1: '',
    pw2: '',
    password: '',

    admin: false,

    low: false,
    up: false,
    num: false,
    spec: false,
    len: false,

    moveface: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE:
            let { name, value } = action.payload
            let passStr = value
            let val1
            let val2
            let val3
            let val4
            let val5

            if (name === 'pw1' || name === 'pw2') {
                passStr.match(/[a-z]+/) ? val1 = true : val1 = false
                passStr.match(/[A-Z]+/) ? val2 = true : val2 = false
                passStr.match(/[0-9]+/) ? val3 = true : val3 = false
                passStr.match(/\W+/) ? val4 = true : val4 = false
                passStr.length >= 8 ? val5 = true : val5 = false
            }
            return {
                ...state,
                [name]: value,
                low: val1,
                up: val2,
                num: val3,
                spec: val4,
                len: val5,
            }
        case AUTH_LOGIN_MODAL:
            return {
                ...state,
                message: '',
                firstName: '',
                lastName: '',
                email: '',
                pw1: '',
                pw2: '',
                password: '',
                low: false,
                up: false,
                num: false,
                spec: false,
                len: false,
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                message: '',
                firstName: '',
                lastName: '',
                email: '',
                pw1: '',
                pw2: '',
                password: '',
                low: false,
                up: false,
                num: false,
                spec: false,
                len: false,
            }
        case SEND_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                message: action.payload,
                admin: false,
                moveface: false,
            }
        case ADMIN_LOGIN_SUCCESS: {
            return {
                ...state,
                admin: !state.admin,
                isAuth: true,
                message: '',
                firstName: '',
                lastName: '',
                email: '',
                pw1: '',
                pw2: '',
                password: '',
                low: false,
                up: false,
                num: false,
                spec: false,
                len: false,
 
            }
        }

        case MOVE_FACE: {
            return {
                ...state,
                moveface: !state.moveface
            }
        }
        default:
            return state
    }
}

export default authReducer