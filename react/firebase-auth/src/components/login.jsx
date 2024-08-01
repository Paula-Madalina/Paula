import React, {useEffect, useState} from 'react'
import {Button, TextField} from '@mui/material'
import { useAuth } from '../contexts/authContext'
import { doSignInWithEmailAndPassword } from '../auth'
import { useNavigate } from 'react-router-dom'
import Header from './header'



function Login() {
  const navigate = useNavigate();
  const {currentUser, userLoggedIn, loading} = useAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(()=> {
    console.log(currentUser)
    if(currentUser) {
      navigate('/')
    }
  }, [currentUser])



  async function handleClick() {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        const user = await doSignInWithEmailAndPassword(email, password);
        console.log(user);
        setIsSigningIn(false);
        navigate("/");
      } catch (error) {
        console.error(error);
        setIsSigningIn(false);
      }
    }
  }


  return (
    <div>
      <Header></Header>
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

        <Button variant='contained' onClick={handleClick}>Login</Button>



      
    </div>
  )
}

export default Login
