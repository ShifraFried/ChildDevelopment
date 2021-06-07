import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./login.css"
import { useHistory } from "react-router-dom";
import Email from './email';
import Password from './password';
import Id from './id';
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveBirthDate } from '../../actions/index'


function Login(props) {


    const history = useHistory();
    const {firstName,lastName,email,id,password,birthDate} = props ;
   

    const [valid, setValid] = useState(true);

    const useEffect = (() => {
        debugger
        if (firstName && lastName && id && email && password && birthDate ) {
            console.log(firstName)
            setValid(false)
        }
        else {
            setValid(true)
        }
    }, [firstName]);

    //  }, [firstName,lastName,id,email,password,birthDate]);
    // const useEffect = (() => {
    //   debugger
    //   console.log("email")
    // }, [email]);

    const signIn = () => {
        
        history.push("/signin");
    }

    const handlerSaveFirstName=(name)=>{
        props.saveFirstName(name)
    }
    const handlerSaveLastName=(name)=>{
        props.saveLastName(name)
    }
    const handlerSaveBirthDate=(name)=>{
        props.saveBirthDate(name)
    }

    return (
        <form>
            <div >הכנסת פרטי הילד</div><br></br>
            <TextField id="outlined-basic" label="firstName" variant="outlined" onChange={(e)=>{handlerSaveFirstName(e.target.value)}}/><br></br>
            <TextField id="outlined-basic" label="lastName" variant="outlined" onChange={(e)=>{handlerSaveLastName(e.target.value)}}/><br></br>
            <Id /><br /><br />
            <Email /><br />
            <Password /><br />
            <TextField id="outlined-basic" label="birthDate" variant="outlined" type="date" onChange={(e)=>{handlerSaveBirthDate(e.target.value)}}/><br></br>
            {/* צריך לסדר את הכפתור שיהיה מאופשר לאחר שמקבל את כל המידע מה reducer */}
            <Button variant="outlined" color="secondary" disabled={valid} onClick={signIn} >רישום</Button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        id: state.id,
        email: state.email,
        password: state.password,
        birthDate: state.birthDate,
    };
};

export default connect(mapStateToProps,{saveFirstName,saveLastName,saveBirthDate})(Login);
