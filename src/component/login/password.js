import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';


const Password = () => {

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
export default Password