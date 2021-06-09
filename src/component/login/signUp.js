import React,{useState} from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import "./login.css"
import {signUpServer} from '../api/userApi'


function SignUp (){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

    const developmentalInformation = () => {
        signUpServer();
        history.push("/developmentalInformation");
    }

    return (
        <form>
            <div>התחברות</div><br></br>
             <TextField id="outlined-basic" label="id" variant="outlined" onChange={(e)=>setId(e.target.value)}/><br></br>
             <TextField id="outlined-basic" label="password" variant="outlined" type="password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
             <Button variant="outlined" color="secondary" onClick={developmentalInformation}>צפייה במידע התפתחותי</Button>
        </form>
    )
}

export default SignUp