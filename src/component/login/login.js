import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveBirthDate } from '../../actions/index'

function Login() {

    const history = useHistory();

    const signIn = () => {
        history.push("/signin");
    }


    return (
        <form>
            <div >הכנסת פרטי הילד</div><br></br>
            <TextField id="outlined-basic" label="firstName" variant="outlined" /><br></br>
            <TextField id="outlined-basic" label="lastName" variant="outlined" /><br></br>
            <Id /><br /><br />
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="birthDate" variant="outlined" type="date" /><br></br>
            {/* צריך לסדר את הכפתור שיהיה מאופשר לאחר שמקבל את כל המידע מה reducer */}
            <Button variant="outlined" color="secondary" disabled="false" onClick={signIn}>רישום</Button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        id: state.Id,
        email: state.Email,
        password: state.Password,
        birthDate: state.birthDate,
    };
};

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveBirthDate })(Login);
