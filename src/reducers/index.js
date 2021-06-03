
import { combineReducers } from "redux";
import { firstNameReducers, lastNameReducers, idReducers, emailReducers, passwordReducers, birthDateReducers } from "./logInReducers";

export default combineReducers({
    
    firstName: firstNameReducers,
    lastName: lastNameReducers,
    id: idReducers,
    email: emailReducers,
    password: passwordReducers,
    birthDate: birthDateReducers
}); 