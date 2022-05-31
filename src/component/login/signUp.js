import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveBirthDate, saveWeightBorn, saveAllFiled } from '../../actions/index'
import { signUpServer } from '../api/userApi'


function Signup(props) {
    const history = useHistory();
    const { firstName, lastName, id, email, password, weightHistory, birthDate, canSignup } = props;

    const signUp = async () => {
        let child = await signUpServer(firstName, lastName, id, email, password, weightHistory, birthDate)
            .then((data) => {
                // if (data != undefined) {
                    console.log(data, "data");
                    alert("הרישום בוצע בהצלחה!! !!")
                    history.push("/login");
                // }
            }
            ).catch((err) => {
                console.log(err, "err");
                alert("err")
                history.push("/")
            })
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
    const handlerSaveWeightBorn = (weightB) => {
        props.saveWeightBorn(weightB)
    }

    return (
        <form>
            <div >הכנסת פרטי הילד</div><br></br>
            <TextField id="outlined-basic" label="firstName" variant="outlined" onChange={(e) => { handlerSaveFirstName(e.target.value) }} /><br></br>
            <TextField id="outlined-basic" label="lastName" variant="outlined" onChange={(e) => { handlerSaveLastName(e.target.value) }} /><br></br>
            <Id /><br /><br />
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="weight born" variant="outlined" type="number" onChange={(e) => { handlerSaveWeightBorn(e.target.value) }} /><br></br>
            <TextField id="outlined-basic" label="birthDate" variant="outlined" type="date" onChange={(e) => { handlerSaveBirthDate(e.target.value) }} /><br></br>
            <Button variant="outlined" color="secondary" disabled={canSignup} onClick={signUp} >רישום</Button>
        </form>
    )
}

const checkSignup = (user) => {
    if (user.firstName && user.lastName && user.id && user.email && user.password && user.birthDate)
        return false;
    return true;
}
const mapStateToProps = ({ user }) => {
    return {
        ...user,
        canSignup: checkSignup(user)
    };

};

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveBirthDate, saveWeightBorn })(Signup);
