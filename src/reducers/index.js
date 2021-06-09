
import { combineReducers } from "redux";
import { userReducer } from "./logInReducers";

export default combineReducers({ user: userReducer }); 