import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { saveFirstName, saveLastName, saveBirthDate,saveWeightBorn, saveAllFiled } from '../../actions/index'
import { signUpServer } from '../api/userApi'
import ImageBackground from "../../assets/frame/Frame2.png"


function Signup(props) {
    const history = useHistory();
    const { firstName, lastName, id, email, password, weightHistory, birthDate, canSignup } = props;

    useEffect(() => {
        document.body.style.backgroundImage = "none"; 
  }, []);
    const signUp = () => {
        signUpServer(firstName, lastName, id, email, password,weightHistory, birthDate)
        alert("הרישום בוצע בהצלחה!! !!")
        history.push("/login");
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
        <div className='signUpForm'>  
        <form className='fileds'> 
            
            <div className='titleSign'>הכנסת פרטי הילד</div><br></br>
            <TextField id="outlined-basic" label="firstName" variant="outlined" onChange={(e) => { handlerSaveFirstName(e.target.value) }} /><br></br>
            <TextField id="outlined-basic" label="lastName" variant="outlined" onChange={(e) => { handlerSaveLastName(e.target.value) }} /><br></br>
            <Id /><br />
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="weight born" variant="outlined" type="number"  onChange={(e) => { handlerSaveWeightBorn(e.target.value) }} /><br></br>
            <TextField className='inputDate' id="outlined-basic" label="birthDate" variant="outlined" type="date" onChange={(e) => { handlerSaveBirthDate(e.target.value) }} /><br></br>
            {/* <Button variant="outlined" color="secondary" disabled={canSignup} onClick={signUp}  >רישום</Button> */}
            <button disabled={canSignup} onClick={signUp}  className="buttonLogin">רישום</button>
           
        </form> </div>
       
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
