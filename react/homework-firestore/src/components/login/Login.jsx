import React, {useState, useEffect} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { Button,TextField,Box } from "@mui/material";
import Header from "../header/Header";
import { doSignInWithEmailAndPassword } from "../../auth";

function Login() {
  const navigate = useNavigate();
  const {currentUser, userLoggedIn, loading} = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(()=> {
    console.log(currentUser)
    if(currentUser) {
      navigate('/')
    }
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  async function handleClick() {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        const user = await doSignInWithEmailAndPassword(formData.email, formData.password);
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
    <Header/>
    <h1 className='form__title'>Login</h1>
    <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" className='form__box'>
        <TextField
                  className='input__field'
        name="email"
        value={formData.email}
        required
        id='email'
        label="Email:"
        onChange={handleChange}
        ></TextField>

        <TextField
                  className='input__field'
        name="password"
        value={formData.password}
        required
        id='password'
        label="Password:"
        onChange={handleChange}
        ></TextField>

        <Button variant='contained' onClick={handleClick}>Login</Button>
        <p>
          <span className="navlink__button">
            Don't have an account? <NavLink className="navigation" to="/register">Register here</NavLink>
          </span>
        </p>
        </Box>

    </div>
  )
}

export default Login;
