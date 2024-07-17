import { useState,useEffect } from 'react'
import {db} from "../firebase.js"
import { collection,getDocs } from 'firebase/firestore'

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import '../App.css'





function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        password: '',
        confirmPassword: ''
    });

    // 
    const handleClick = (e) => {
        e.preventDefault();
    }

  return (
    <div>
    <h1>Register</h1>
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          First Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>  
      
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
        Last Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
       Age
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
       Age
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="number"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
        Password
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
       Confirm Password
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>

      <Button className='register__button' color="secondary" variant='contained' size='large' sx={{ width: 200, marginTop:1, background:"black" }}
 onClick={handleClick}>
        Test
      </Button>

      </div>
  )
}

export default Register;
