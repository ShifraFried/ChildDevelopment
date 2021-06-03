
export const saveFirstName = (firstName) => {
    return function (dispatch) {
        dispatch({ type: "save_firstName", payload: firstName });
    };
};

export const saveLastName = (lastName) => {
    return function (dispatch) {
        dispatch({ type: "save_lastName", payload: lastName });
    };
};

export const saveId = (id) => {
    return function (dispatch) {
        dispatch({ type: "save_id", payload: id });
    };
};

export const saveEmail = (email) => {
    return function (dispatch) {
        dispatch({ type: "save_email", payload: email });
    };
};

export const savePassword = (password) => {
    return function (dispatch) {
        dispatch({ type: "save_password", payload: password });
    };
};

export const saveBirthDate = (birthDate) => {
    return function (dispatch) {
        dispatch({ type: "save_birthDate", payload: birthDate });
    };
};

// export const saveAllFiled = () => {
//     return function (dispatch, getState) {
//         const { login } = getState()
//         //Validation
//         //API call -send props
//         dispatch({ type: "save_all_filed", payload: result.data });
//     };
// }; 
