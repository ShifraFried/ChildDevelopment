import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import "./login.css"

function SignIn (){
    const history = useHistory();

    const developmentalInformation = () => {
        history.push("/developmentalInformation");
    }
  
    return(
        <form>
            <div >התחברות</div><br></br>
             <TextField id="outlined-basic" label="id" variant="outlined" /><br></br>
             <TextField id="outlined-basic" label="password" variant="outlined" type="password"/><br></br>
             <Button variant="outlined" color="secondary" onClick={developmentalInformation}>צפייה במידע התפתחותי</Button>
        </form>
    )
}

export default SignIn