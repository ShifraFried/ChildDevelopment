import React from 'react';
import { Button } from '@material-ui/core';
import './home.css'
import { useHistory } from "react-router-dom";



function Home() {

    const history = useHistory();
    
    const login = () => {    
        history.push("/login");
    }

    const signIn = () => {    
        history.push("/signin");
    }


    return <div className="btn">
        <Button variant="outlined" color="secondary" onClick={login}>
            רישום
        </Button>

        <Button variant="outlined" color="secondary" onClick={signIn} >
            כניסה
        </Button>
    </div>
}

export default Home;