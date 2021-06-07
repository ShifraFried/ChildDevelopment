
const initialState = {
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    password: "",
    birthDate: ""
}

export const firstNameReducers = (state = initialState, action) => {
    
    if (action.type === "save_firstName") {
        return { ...state, firstName: action.payload };
    }
    return state;
}

export const lastNameReducers = (state = initialState, action) => {
    
    if (action.type === "save_lastName") {
        return { ...state, lastName: action.payload };
    }
    return state;
}

export const idReducers = (state = initialState, action) => {
    if (action.type === "save_id") {
        return { ...state, id: action.payload };
    }
    return state;
}

export const emailReducers = (state = initialState, action) => {
    if (action.type === "save_email") {
        return { ...state, email: action.payload };
    }
    return state;
}

export const passwordReducers = (state = initialState, action) => {
    if (action.type === "save_password") {
        return { ...state, password: action.payload };
    }
    return state;
}

export const birthDateReducers = (state = initialState, action) => {
    if (action.type === "save_birthDate") {
        return { ...state, birthDate: action.payload };
    }
    return state;
}

// export const saveAllReducers = (state = initialState, action) => {
//     if (action.type === "save_all_filed") {
//         return { };
//     }
//     return state;
// }

