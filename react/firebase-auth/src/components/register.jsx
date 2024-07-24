import React, { useState } from 'react'
import {Button, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../auth';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isReg, setIsReg] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const userLoggedIn = useAuth;
    const navigate = useNavigate();

    const handleClick = async () => {
        if(!isReg) {
            setIsReg(true);
            // codul care creeaza un user
            await doCreateUserWithEmailAndPassword(email, password).then((user)=> {
                setIsReg(false);
                setEmail("");
                setPassword("");
                navigate('/')
            }).catch((error) => {
                console.log(error);
                setIsReg(false);
            })

        }
    }  
  return (
    <div>
        <TextField
        value={email}
        required
        id='email'
        label="Email:"
        onChange={(e)=>{setEmail(e.target.value)}}
        ></TextField>

        <TextField
        value={password}
        required
        id='password'
        label="Password:"
        onChange={(e)=>{setPassword(e.target.value)}}
        ></TextField>

        <Button variant='contained' onClick={handleClick}>Register</Button>



      
    </div>
  )
}

export default Register;
