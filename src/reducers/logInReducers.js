
const initialState = {
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    password: "",
    birthDate: "",
    _id:"",
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "save_firstName":
            return { ...state, firstName: action.payload };
        case ("save_lastName"):
            return { ...state, lastName: action.payload };
        case ("save_id"):
            return { ...state, id: action.payload };
        case ("save_email"):
            return { ...state, email: action.payload };
        case ("save_password"):
            return { ...state, password: action.payload };
        case ("save_weightBorn"):
            return { ...state, weightHistory: action.payload };
        case ("save_birthDate"):
            return { ...state, birthDate: action.payload };
        case ("save_id_mongo"):
            return { ...state, _id: action.payload };

        default:
            return state;
    }
}


