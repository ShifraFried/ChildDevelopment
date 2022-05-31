import React , {useEffect} from 'react';
// import { Button } from '@material-ui/core';
import './home.css'
import { useHistory } from "react-router-dom";
import ImageBackground from '../assets/frame/Frame1.png'


function Home() {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${ImageBackground})`;
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed"
  }, []);

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