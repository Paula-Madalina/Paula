import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { doCreateUserWithEmailAndPassword} from  "../../auth";
import { auth } from '../../firebase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Header from '../header/Header';

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isReg, setIsReg] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (currentUser && redirectToLogin) {
    //         console.log("User is logged in. Redirecting to login...");
    //         navigate('/login');
    //     } else if (currentUser) {
    //         console.log("User is logged in. Signing out...");
    //         signOut(auth).then(() => {
    //             console.log("User signed out.");
    //         }).catch((error) => {
    //             console.error("Error signing out: ", error);
    //         });
    //     }
    // }, [currentUser, redirectToLogin]);

    useEffect(()=> {
      console.log(currentUser)
      if(currentUser) {
        navigate('/')
      }
    }, [currentUser])
  
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };



    const handleClick = async (e) => {
        e.preventDefault();
        if(!isReg) {
          setIsReg(true);
          if (formData.password !== formData.confirmPassword) {
              alert("Passwords do not match");
              setIsReg(false);
              return;
          }
          // codul care creeaza un user
          await doCreateUserWithEmailAndPassword(formData.email, formData.password).then(async (user) => {
              setIsReg(false);

              const userCollection = collection(db, "users" );
              await setDoc(doc(db, "users", user.user.uid ), 
              {
                firstname: formData.firstName,
                lastname: formData.lastName,
                age: formData.age,
                email: formData.email,
                role: "user"
              });
              setFormData({
                  firstname: "",
                  lastname: "",
                  age: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
              });
              navigate('/');
          }).catch((error) => {
              console.log(error);
              setIsReg(false);
          });
        }
    };

 

    return(
    <div>

       <form >
       <Header></Header>

      <h1 className='form__title'>Register</h1>
      <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" className='form__box'>
        <TextField 
          className='input__field'
          type='text'
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          label="First Name"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
          className='input__field'
          type='text'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          label="Last Name"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='number'
          name="age"
          value={formData.age}
        onChange={handleChange}
          label="Age"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='text'
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email Address"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
        className='input__field'
          type='password'
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          variant="outlined"
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <Button 
        onClick={handleClick}
          type="submit" 
          variant="outlined" 
          sx={{ width: 110, backgroundColor: "wheat", color: "black", marginTop: "7px", '&:hover': { backgroundColor: 'lightgray', color: 'blue' } }}
        >
          Register
        </Button>

        <p>
          <span className="navlink__button">
            Already have an account? <NavLink className="navigation" to="/login">Login here</NavLink>
          </span>
        </p>
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center', position: 'fixed', bottom: 0, left: 0, color: "black" }}>
        © 2024 Paula Prepelita. All rights reserved.
      </Box>
    </form>
    </div>

    )
}

export default Register;

