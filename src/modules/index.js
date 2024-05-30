
import { authRedux } from "./authRedux";
import { combineReducers } from "redux";
import { sotreRedux } from "./sotreRedux";
export const rootReducer = combineReducers({
    authRedux,sotreRedux
})