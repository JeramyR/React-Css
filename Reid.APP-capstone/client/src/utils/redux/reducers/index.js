import { combineReducers } from "redux";

import appReducer from "./appReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    modal: modalReducer,
    nav: navReducer,
})

export default rootReducer