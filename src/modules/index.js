
import { authRedux } from "./authRedux";
import { combineReducers } from "redux";
import { sotreRedux } from "./sotreRedux";
import { user } from "./user";
export const rootReducer = combineReducers({
    authRedux,sotreRedux,user
})