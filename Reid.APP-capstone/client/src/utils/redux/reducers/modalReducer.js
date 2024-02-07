import { 
    LOGIN_MODAL, FLIP_CARD, LOGIN_SUCCESS, 
    ADMIN_MODAL, EASTER_EGG, OPEN_DELETE,

} from '../types'

let initialState = {
    loginmodal: false,
    flipcard: false,

    adminmodal: false,
    easter: false,

    deletemodal: false,
    _id: '',
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_MODAL:
            return {
                ...state,
                loginmodal: !state.loginmodal,
                adminmodal: false,
                flipcard: false
            }
        case FLIP_CARD:
            return {
                ...state,
                flipcard: !state.flipcard
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginmodal: false,
                flipcard: false,
                adminmodal: false,
            }
        case ADMIN_MODAL:
            return {
                ...state,
                adminmodal: !state.adminmodal
            }
        case EASTER_EGG:
            return {
                ...state,
                easter: !state.easter
            }
        case OPEN_DELETE:
            return {
                ...state,
                deletemodal: !state.deletemodal,
                _id: action.payload
            }
        default:
            return state
    }
}

export default modalReducer