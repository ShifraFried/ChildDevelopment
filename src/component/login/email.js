import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import TextValidator, { ValidatorForm } from 'react-material-ui-form-validator';
import validator from 'validator'
import {saveEmail} from '../../actions/index'
import { connect } from "react-redux";

const Email = (props) => {

    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState('');

    // const useEffect=(()=>{
    //     if (validator.isEmail(email)) {
    //         setValid(false)
    //     } 
    //     else {
    //       setValid(true)
    //     }   
    //   }, [email]);  
      
      const emailValidator =(email)=>{
        if (validator.isEmail(email)) {
            props.saveEmail(email);
            setValid(false)
            setMessage('')
        } 
        else {
          setValid(true)
          setMessage('not valid')
          
        }  
      }
      const onChangeHandle=(e)=>{
        const tmp = e.target.value;
        setEmail(tmp);
        emailValidator(tmp);
    }

    return <TextField id="outlined-basic" label="email" variant="outlined"  error={valid} onChange={onChangeHandle} helperText={message} />


}
const mapStateToProps = (state) => {
  return {
      email: state.email,
  };
};

export default connect(mapStateToProps, { saveEmail })(Email);

