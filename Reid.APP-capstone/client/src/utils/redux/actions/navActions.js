import { DROP_DOWN, DROP_UP, HOME_TAB, SELL_TAB, PROFILE_TAB } from "../types";

export const dropDown = () => {
    return {
        type: DROP_DOWN
    }
}
export const dropUp = () => {
    return {
        type: DROP_UP
    }
}

export const homeTab = () => {
    return {
        type: HOME_TAB
    }
}
export const sellTab = () => {
    return {
        type: SELL_TAB
    }
}
export const profileTab = () => {
    return {
        type: PROFILE_TAB
    }
}
