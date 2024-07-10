import { useEffect, useState } from "react";
import { useForm } from "../../../customHooks/useForm";
import { getRegisterMap } from "../../../maps/authMaps";
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
    const { form, handleChange, errors, isFormValid, setForm } = useForm({ email: "", firstName: "", lastName: "", age: "", password: "", confirmPassword: "" });
    const RegisterMap = getRegisterMap(handleChange, errors, form);
    const RegisterInputs = RegisterMap.map((input) =>
        <div className="register_input" key={input.id}>
            <div className="itworks">
                <label className="input__name">{input.label}</label>
                <input className={`input__box ${!input.error.success ? 'error' : ''} ${input.value && input.error.success ? 'valid' : ''}`} id={input.id} type={input.type} placeholder={input.placeholder} name={input.name} value={input.value} onChange={input.onChange}></input>
            </div>
            <span className="error__message">{input.error && input.error.message}</span>
        </div>
    );

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        alert("Submitted form");
        navigate(`/login`);


        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isDuplicateEmail = existingUsers.some(user => user.email === form.email);

        if (isDuplicateEmail) {
            alert("Email address already exists");
            return;
        }

        const newUser = {
            id: existingUsers.length + 1,
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            age: form.age,
            password: form.password
        };
        const updatedUsers = [...existingUsers, newUser];

        // Salvare în localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setForm({
            email: "",
            firstName: "",
            lastName: "",
            age: "",
            password: "",
            confirmPassword: ""
        });

        // Navigare către pagina de login
        navigate(`/login`);
    };

    return (
        <div className="page__container">
            <form onSubmit={handleSubmit} className="form__style">
                <h1 className="form__name">Register</h1>
                {RegisterInputs}
                <button className="login__register__button" type="submit" disabled={!isFormValid}>
                    Sign up
                </button>
                <span className="navlink__button">
                    Already have an account? <NavLink className="navigation" to="/login">Login here</NavLink>
                </span>
            </form>
        </div>
    );
}

export default Register;
