import React from 'react';
// import { Button } from '@material-ui/core';
import './home.css'
import { useHistory } from "react-router-dom";



function Home() {

    const history = useHistory();
    
    const login = () => {    
        history.push("/login");
    }

    const signUp = () => {    
        history.push("/signup");
    }


    return <div className="btn">
        {/* <Button variant="outlined" color="secondary" onClick={signUp}>
            רישום
        </Button> */}
        <button className="signup" onClick={signUp}>
            הרשמה
        </button>
        <button className="login" onClick={login}>
        התחברות
        </button>

        {/* <Button variant="outlined" color="secondary" onClick={login} >
            
        </Button> */}
    </div>
}

export default Home;