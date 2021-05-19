import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';

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
            <Id/><br/><br/>
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="birthDate" variant="outlined" type="date" /><br></br>
            <Button variant="outlined" color="secondary" onClick={signIn}>רישום</Button>
        </form>

    )
}

export default Login;