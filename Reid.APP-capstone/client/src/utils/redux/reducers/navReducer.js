import { DROP_DOWN, DROP_UP, HOME_TAB, SELL_TAB, PROFILE_TAB } from '../types'

let initialState = {
    hamburger: false,
    hometab: true,
    selltab: false,
    profiletab: false,
}


const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case DROP_DOWN:
            return {
                ...state,
                hamburger: !state.hamburger
            }
        case DROP_UP:
            return {
                ...state,
                hamburger: false
            }
        case HOME_TAB:
            return {
                ...state,
                hometab: true,
                selltab: false,
                profiletab: false,
            }
        case SELL_TAB:
            return {
                ...state,
                hometab: false,
                selltab: true,
                profiletab: false,
            }
        case PROFILE_TAB:
            return {
                ...state,
                hometab: false,
                selltab: false,
                profiletab: true,
            }
        default:
            return state
    }
}

export default navReducer