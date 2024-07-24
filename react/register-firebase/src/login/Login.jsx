import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { db } from "../firebase.js";
import { collection, query, where, getDocs } from 'firebase/firestore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import { 
//     validateEmail, 
//     validatePassword 
//   } from '../validations/validations';

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

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        // validateField(name, value);

    };


    // const validateField = (name, value) => {
    //     if (name === 'email') {
    //       setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: validateEmail(value)
    //       }));
    //     } else if (name === 'password') {
    //       setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         password: validatePassword(value)
    //       }));
    //     }
    //   };


    const handleSubmit = async (e) => {
        e.preventDefault();

         // Validare finală a tuturor câmpurilor
    // const newErrors = {
    //     email: validateEmail(formData.email),
    //     password: validatePassword(formData.password)
    //   };
  
    //   if (Object.values(newErrors).some(error => error !== '')) {
    //     setErrors(newErrors);
    //     return;
    //   }

        try {
            const q = query(collection(db, "users"), where("email", "==", formData.email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                toastr.error("User not found", "Error");
            } else {
                let userFound = false;
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (userData.password === formData.password) {
                        userFound = true;
                        toastr.success("Login successful", "Success");

                        // navigate('/home');
                    }
                });

                if (!userFound) {
                    toastr.error("Incorrect email or password ", "Error");
                }
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            toastr.error("An error occurred while logging in. Please try again.", "Error");
        }

        setFormData({
            email: "",
            password: "",
        });
    };

 




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='form__title'>Login</h1>
                <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" className='form__box'>
                    <TextField
                        type='text'
                        className='input__field'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        InputLabelProps={{
                            sx: {
                                color: 'red',
                                '&.Mui-focused': {
                                    color: 'red',
                                    fontSize: 20
                                }
                            }
                        }}
                    />
                    <TextField
                        className='input__field'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        InputLabelProps={{
                            sx: {
                                color: 'red',
                                '&.Mui-focused': {
                                    color: 'red',
                                    fontSize: 20
                                }
                            }
                        }}
                    />

                    <Button
                        type="submit"
                        variant="outlined"
                        sx={{
                            width: 110,
                            backgroundColor: "wheat",
                            color: "black",
                            marginTop: "7px",
                            '&:hover': {
                                backgroundColor: 'lightgray',
                                color: 'blue',
                                borderColor: 'blue',
                            },
                        }}>
                        Login
                    </Button>
                    <p>
                        <span className="navlink__button">
                            Don't have an account? <NavLink className="navigation" to="/">Register here</NavLink>
                        </span>
                    </p>
                </Box>
            </form>

            <Box
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    color: "black",
                    marginTop: "1100px"
                }}
            >
                © 2024 Paula Prepelita. All rights reserved.
            </Box>
        </div>
    );
}

export default Login;
