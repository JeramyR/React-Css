import { LOGIN_MODAL, FLIP_CARD, LOGIN_SUCCESS, ADMIN_MODAL, EASTER_EGG, OPEN_DELETE} from '../types'

export const loginModal = () => {
    return {
        type: LOGIN_MODAL

    }
}

export const flipCard = () => {  
    return {
        type: FLIP_CARD
    }
}

export const modalloginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const adminModal = () => {
    return {
        type: ADMIN_MODAL
    }
}

export const easterEgg = () => {
    return {
        type: EASTER_EGG
    }
}

export const openDelete = id => {
    return {
        type: OPEN_DELETE,
        payload: id
    }
}