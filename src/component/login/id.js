import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import {saveId} from '../../actions/index'
import { connect } from "react-redux";

const Id = (props)=>{
        const [id, setId] = useState('');
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
    
        const idValidator = (id) => {
            if (id.length !== 9) {
                props.saveId(id);
                setValid(true)
                setMessage('you need enter only 9 chars')
            }
            else {
                setValid(false)
                setMessage('')
            }
        }
        const onChangeHandle = (e) => {
            const tmp = e.target.value;
            setId(tmp);
            idValidator(tmp);
        }
    
    
        return <TextField id="outlined-basic" label="id" variant="outlined"  error={valid} onChange={onChangeHandle} helperText={message} />
    }
   
    const mapStateToProps = (state) => {
        return {
            id: state.id,
        };
      };
      
      export default connect(mapStateToProps, { saveId })(Id);