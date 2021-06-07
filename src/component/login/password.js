import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import {savePassword} from '../../actions/index'
import { connect } from "react-redux";

const Password = (props) => {

    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState('');

    // const useEffect = (() => {
    //     if (password.length !== 6) {
    //         setValid(false)
    //     }
    //     else {
    //         setValid(true)
    //     }
    // }, [password]);

    const passwordValidator = (password) => {
        if (password.length !== 6) {
            props.savePassword(password);
            setValid(true)
            setMessage('you need enter only 6 chars')
        }
        else {
            setValid(false)
            setMessage('')
        }
    }
    const onChangeHandle = (e) => {
        const tmp = e.target.value;
        setPassword(tmp);
        passwordValidator(tmp);
    }
    
    return <TextField id="outlined-basic" label="password" variant="outlined" type="password" error={valid} onChange={onChangeHandle} helperText={message} />
}
const mapStateToProps = (state) => {
    return {
        password: state.password,
    };
  };
  
  export default connect(mapStateToProps, { savePassword })(Password);