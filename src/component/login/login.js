import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveBirthDate, saveAllFiled } from '../../actions/index'


function Login(props) {
    console.log(props);
    const history = useHistory();
    const { firstName, lastName, email, id, password, birthDate, canLogin } = props;

    const signIn = () => {

        history.push("/signin");
    }

    const handlerSaveFirstName = (Fname) => {
        props.saveFirstName(Fname)
    }
    const handlerSaveLastName = (Lname) => {
        props.saveLastName(Lname)
    }
    const handlerSaveBirthDate = (Bday) => {
        props.saveBirthDate(Bday)
    }

    return (
        <form>
            <div >הכנסת פרטי הילד</div><br></br>
            <TextField id="outlined-basic" label="firstName" variant="outlined" onChange={(e) => { handlerSaveFirstName(e.target.value) }} /><br></br>
            <TextField id="outlined-basic" label="lastName" variant="outlined" onChange={(e) => { handlerSaveLastName(e.target.value) }} /><br></br>
            <Id /><br /><br />
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="birthDate" variant="outlined" type="date" onChange={(e) => { handlerSaveBirthDate(e.target.value) }} /><br></br>
            <Button variant="outlined" color="secondary" disabled={canLogin} onClick={signIn} >רישום</Button>
        </form>
    )
}

const checkLogin = (user) => {
    if (user.firstName && user.lastName && user.id && user.email && user.password && user.birthDate)
        return false;
    return true;
}
const mapStateToProps = ({ user }) => {
    return {
        ...user,
        canLogin: checkLogin(user)
    };

};

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveBirthDate })(Login);
