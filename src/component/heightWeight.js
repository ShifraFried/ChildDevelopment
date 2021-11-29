import React, { useState } from 'react';
import { ServerStyleSheets, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { putWeight, putBornWeight, logInServer } from "./api/userApi"
import moment from 'moment'
import { Link } from 'react-router-dom';
import { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo } from '../actions/index'

function HeightWeight(props) {

    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState('');

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(Date.now());

    const [weightBorn, setWeightBorn] = useState(0);

    const weightValidator = (weight) => {
        //regulation 
        if (weight == 0) {
            setValid(true)
            setMessage('שדה חובה')
        }
        else if (weight < 300 || weight > 15000) {
            setValid(true)
            setMessage('משקל לא תקין')
        }
        else {
            setValid(false)
            setMessage('')
        }

    }
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
    const onChangeHandle = (e) => {
        const tmp = e.target.value;
        setWeight(tmp);
        weightValidator(tmp);
    }
    const onChanceDate = (e) => {
        const tmp = e.target.value;
        setDate(tmp);
    }
    const onChangeHandleBorn = (e) => {
        const tmp = e.target.value;
        setWeightBorn(tmp);
        weightValidator(tmp);
    }
    const calc = (age) => {
        let durationAge = moment.duration(age)._data;
        console.log(durationAge, "durationAge");
        if (durationAge.months >= 0 && durationAge.months <= 4) {
            let minWeight = Number(props.weightBorn.weight) + durationAge.days * 18 + durationAge.months * 600;
            let maxWeight = Number(props.weightBorn.weight) + durationAge.days * 30 + durationAge.months * 750;
            console.log(minWeight, "minWeight");
            console.log(maxWeight, "maxWeight");
            console.log(weight, "weight");
            if (weight > maxWeight || weight < minWeight) {
                alert("משקל חריג לגיל זה")
            }
            else {
                alert("OK!! ")
            }
        }
        else {
            if (durationAge.months > 4 && durationAge.months <= 8) {
                let minWeight = Number(props.weightBorn.weight) + durationAge.days * 15 + (durationAge.months - 4) * 450 + 4 * 600;
                let maxWeight = Number(props.weightBorn.weight) + durationAge.days * 18 + (durationAge.months - 4) * 540 + 4 * 750;
                console.log(minWeight, "minWeight");
                console.log(maxWeight, "maxWeight");
                console.log(weight, "weight");
                if (weight > maxWeight || weight < minWeight) {
                    alert("משקל חריג לגיל זה")
                }
                else {
                    alert("OK!! ")
                }
            }
            else {
                if (durationAge.months < 12) {
                    let minWeight = Number(props.weightBorn.weight) + (durationAge.months - 8) * 225 + durationAge.days * 7.5 + 4 * 450 + 4 * 600;
                    let maxWeight = Number(props.weightBorn.weight) + (durationAge.months - 8) * 270 + durationAge.days * 9 + 4 * 540 + 4 * 750;
                    if (weight > maxWeight || weight < minWeight) {
                        alert("משקל חריג לגיל זה")
                    }
                    else {
                        alert("OK!! ")
                    }
                }
            }
        }
    }

    const putWeightToServer = async () => {
        let age = (moment(date).diff(props.birthDate));
        if (props.weightBorn.weight && weight) {
            const user = await putWeight(props.id, age, weight, date).then((u) => {
                    //u == undefined
                console.log(u,"user");
                calc(age);
                alert("HeightWeight")
                // logInServer(props.id, props.password)
                saveInRedux(u);
            }).catch((error) => { console.log(error) })
        }
        else if (weight && weightBorn) {
            saveWeightBorn(weightBorn);
            calc(age);
            // let age = (moment(new Date()).diff(props.birthDate));
            let user = putBornWeight(props.id, age, weight, date, weightBorn);
            // saveInRedux(user);
            alert("HeightWeight")
        }
        else {
            setValid(true)
            setMessage('שדה חובה')
        }
    }
    return (
        <form>
            <div>הכנסת פרטי גובה ומשקל</div><br></br>
            <TextField id="outlined-basic" label="height" variant="outlined" type="number" /><br></br>
            {!props.weightBorn.weight && <div><TextField id="outlined-basic" label="weight born" variant="outlined" type="number" error={valid} onChange={onChangeHandleBorn} helperText={message} /><br /></div>}
            <TextField id="outlined-basic" label="weight" variant="outlined" type="number" error={valid} onChange={onChangeHandle} helperText={message} /><br></br>
            <TextField id="outlined-basic" label="date" variant="outlined" type="date" onChange={onChanceDate} /><br></br>
            <Button variant="outlined" color="secondary" onClick={putWeightToServer}>חישוב </Button><br></br>
            <Link to="weightHistory">היסטורית הגדילה שלי /</Link>
        </form>
    )
}

const mapStateToProps = (({ user }) => {
    // console.log(user);
    // console.log(user.weightHistory[0]);
    return { id: user._id, birthDate: user.birthDate, weightBorn: user.weightHistory[0] }
})

export default connect(mapStateToProps, { saveFirstName, saveLastName, saveId, saveEmail, savePassword, saveWeightBorn, saveBirthDate, saveIdFromMongo })(HeightWeight);