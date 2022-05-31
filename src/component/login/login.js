import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import moment from 'moment'
import "./login.css"
import { logInServer } from '../api/userApi'
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo } from '../../actions/index'
import ImageBackground from "../../assets/frame/Frame3.png"

function Login(props) {
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');

    const history = useHistory();

    const saveInRedux = (user) => {
        props.saveFirstName(user.firstName)
        props.saveLastName(user.lastName)
        props.saveId(user.id)
        props.saveEmail(user.email)
        props.savePassword(user.password)
        props.saveBirthDate(user.birthDate)
        props.saveWeightBorn(user.weightHistory)
        props.saveIdFromMongo(user._id)
    }


    const clcAge = (birthDate) => {
        return moment.duration(moment(new Date()).diff(birthDate));
    }
  useEffect(() => {
        document.body.style.backgroundImage = "none";
    }, []);
    const EnterMenu = async () => {
        try {
            const user = await logInServer(Id, Password);
            console.log('u', user);
            const name = user.result.firstName;
            const age = clcAge(user.result.birthDate);
            console.log(user.result.birthDate);
            console.log(age);
            if (age._data.years > 2) {
                alert("שלום  " + name + "הגיל שלך " + age._data.years + " שנים" + age._data.months + " חודשים ");
            }
            else if (age._data.months > 0) {
                alert("שלום  " + name + "הגיל שלך " + age._data.months + " חודשים " + age._data.days + " ימים ");
            }
            else {
                alert("שלום  " + name + "הגיל שלך " + age._data.days + " ימים ");
            }
            saveInRedux(user.result);
            return history.push("/Menu");
        }
        catch (error) {
            console.log(error);
            alert("ילדך לא רשום למערכת");
            return history.push('/signup')
        }
    }
    return (
        <div>
            <div className='loginForm'>
                <form className='loginInfo'>

                    <div className='lodinTitle'>התחברות</div><br></br>
                    <TextField id="outlined-basic" label="id" variant="outlined" onChange={(e) => setId(e.target.value)} /><br></br>
                    <TextField id="outlined-basic" label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <Button variant="outlined" color="secondary" onClick={EnterMenu}>צפייה במידע התפתחותי</Button>
                </form></div>
        </div>
    )
}


const mapStateToProps = ({ user }) => {
    return {
        ...user
    };
}

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo})(Login);
