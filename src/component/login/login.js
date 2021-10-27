import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import moment from 'moment'
import "./login.css"
import { logInServer } from '../api/userApi'
import { connect } from "react-redux";
import { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo } from '../../actions/index'

function Login(props) {
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');

    const { firstName, lastName, id, email, password, weightHistory, birthDate,_id } = props;

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

    const developmentalInformation = async () => {
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
            return history.push("/developmentalInformation");
        }
        catch (error) {
            console.log(error);
            alert("ילדך לא רשום למערכת");
            return history.push('/signup')
        }
    }

    return (
        <form>
            <div>התחברות</div><br></br>
            <TextField id="outlined-basic" label="id" variant="outlined" onChange={(e) => setId(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
            <Button variant="outlined" color="secondary" onClick={developmentalInformation}>צפייה במידע התפתחותי</Button>
        </form>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    };
}

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo})(Login);
