
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

export const saveWeightBorn = (weightBorn) => {
    return function (dispatch) {
        dispatch({ type: "save_weightBorn", payload: weightBorn });
    };
};
export const saveBirthDate = (birthDate) => {
    return function (dispatch) {
        dispatch({ type: "save_birthDate", payload: birthDate });
    };
};
export const saveIdFromMongo = (id) => {
    return function (dispatch) {
        dispatch({ type: "save_id_mongo", payload: id });
    };
};

