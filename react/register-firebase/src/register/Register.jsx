// import { useState,useEffect } from 'react'
// import {db} from "../firebase.js"
// import { collection, addDoc } from 'firebase/firestore'

// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl, { formControlClasses } from '@mui/material/FormControl';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';
// import LockIcon from '@mui/icons-material/Lock';



// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//     console.log(name, value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // insert new document

//     const usersCollection = collection(db, "users");
//     await addDoc(usersCollection, {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       age: formData.age,
//       password: formData.password,
//       confirmPassword: formData.confirmPassword
//     });

//     // Resetați formularul
//     setFormData({
//       firstName: '',
//       lastName: '',
//       age: '',
//       password: '',
//       confirmPassword: ''
//     });

//     alert("User registered successfully");
//   };

//   return (
//     <div className='form__box'>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//           <FormControl variant="standard">
//             <InputLabel htmlFor="input-first-name">First Name</InputLabel>
//             <Input
//               id="input-first-name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </Box>

//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//           <FormControl variant="standard">
//             <InputLabel htmlFor="input-last-name">Last Name</InputLabel>
//             <Input
//               id="input-last-name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </Box>

//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//           <FormControl variant="standard">
//             <InputLabel htmlFor="input-age">Age</InputLabel>
//             <Input
//               id="input-age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </Box>

//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//           <FormControl variant="standard">
//             <InputLabel className='input__label' htmlFor="input-password">Password</InputLabel>
//             <Input
//               id="input-password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </Box>

//         <Box sx={{ '& > :not(style)': { m: 1 } }}>
//           <FormControl variant="standard">
//             <InputLabel htmlFor="input-confirm-password">Confirm Password</InputLabel>
//             <Input
//               id="input-confirm-password"
//               name="confirmPassword"
//               type="password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//         </Box>

//         <Button type="submit" variant="outlined" sx={{ width: 230, backgroundColor: "red", color: "white" }}>
//           Register
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {db} from "../firebase.js"
import { collection, addDoc } from 'firebase/firestore'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import { 
//   validateEmail, 
//   validatePassword, 
//   validateConfirmPassword, 
//   validateTextField 
// } from '../validations/validations';



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
    firstName:"",
    lastName:"",
    age:"",
    email: "",
    password:"",
    confirmPassword:""
  });

  // const [errors, setErrors] = useState({});
  // const [touched, setTouched] = useState({});
  
  const navigate = useNavigate();

  // const validateField = (name, value) => {
  //   switch (name) {
  //     case 'firstName':
  //       return value.trim() === '' ? 'First Name is required' : '';
  //     case 'lastName':
  //       return value.trim() === '' ? 'Last Name is required' : '';
  //     case 'age':
  //       return isNaN(value) || value <= 0 ? 'Age must be a positive number' : '';
  //     case 'email':
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //       return !emailRegex.test(value) ? 'Invalid email address' : '';
  //     case 'password':
  //       return value.length < 5 ? 'Password must be at least 6 characters long' : '';
  //     case 'confirmPassword':
  //       return value !== formData.password ? 'Passwords do not match' : '';
  //     default:
  //       return '';
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));

    // setErrors(prevErrors => ({
    //   ...prevErrors,
    //   [name]: validateField(name, value)
    // }));

    // setTouched(prevTouched => ({
    //   ...prevTouched,
    //   [name]: true
    // }));
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newErrors = {
    //   firstName: validateField('firstName', formData.firstName),
    //   lastName: validateField('lastName', formData.lastName),
    //   age: validateField('age', formData.age),
    //   email: validateField('email', formData.email),
    //   password: validateField('password', formData.password),
    //   confirmPassword: validateField('confirmPassword', formData.confirmPassword)
    // };

    // setErrors(newErrors);

    // if (Object.values(newErrors).some(error => error)) {
    //   return;
    // }

    
    try {
      const usersCollection = collection(db, "users");
      await addDoc(usersCollection, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });

      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      toastr.success('Registration successful!', 'Congratulations');
      navigate('/login');
    } catch (error) {
      toastr.error('An error occurred during registration. Please try again.', 'Error');
      console.error("Error adding document: ", error);
    }
  };
 
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1 className='form__title'>Register</h1>
      <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" className='form__box'>
        <TextField 
          className='input__field'
          type='text'
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
          label="First Name"
          variant="outlined"
          // error={touched.firstName && !!errors.firstName}
          // helperText={touched.firstName && errors.firstName}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
          className='input__field'
          type='text'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
          label="Last Name"
          variant="outlined"
          // error={touched.lastName && !!errors.lastName}
          // helperText={touched.lastName && errors.lastName}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='number'
          name="age"
          value={formData.age}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, age: true }))}
          label="Age"
          variant="outlined"
          // error={touched.age && !!errors.age}
          // helperText={touched.age && errors.age}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='text'
          name="email"
          value={formData.email}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
          label="Email Address"
          variant="outlined"
          // error={touched.email && !!errors.email}
          // helperText={touched.email && errors.email}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
                className='input__field'

          type='password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
          label="Password"
          variant="outlined"
          // error={touched.password && !!errors.password}
          // helperText={touched.password && errors.password}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <TextField 
        className='input__field'
          type='password'
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          // onBlur={() => setTouched(prev => ({ ...prev, confirmPassword: true }))}
          label="Confirm Password"
          variant="outlined"
          // error={touched.confirmPassword && !!errors.confirmPassword}
          // helperText={touched.confirmPassword && errors.confirmPassword}
          InputLabelProps={{ sx: { color: 'red', '&.Mui-focused': { color: 'red' } } }}
        />

        <Button 
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
  
  );
}

export default Register;