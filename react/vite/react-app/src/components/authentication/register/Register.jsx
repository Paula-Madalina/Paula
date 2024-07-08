import { useEffect, useState } from "react";
// import { validationRules } from "../../../utils/validation/validation";
import {useForm} from "../../../customHooks/useForm";
import { getRegisterMap } from "../../../maps/authMaps";

function Register() {

	const {form, handleChange,errors, isFormValid} = useForm({email:"", firstName:"",lastName:"", age:"", password:"", confirmPassword:""})
	
	const RegisterMap = getRegisterMap(handleChange, errors, form);
	const RegisterInputs = RegisterMap.map((input) =>

	<div className="register_input" key={input.id}>
		<div className="itworks">
			<label className="input__name">{input.label}</label>
			<input className={`input__box ${!input.error.success ? 'error' : ''} ${input.value && input.error.success ? 'valid' : ''}`} id={input.id} type={input.type} placeholder={input.placeholder} name={input.name} value={input.value} onChange={input.onChange}></input>
		</div>
		<span className="error__message">{input.error && input.error.message}</span>
	</div>)
	
	// console.log(loginInputs)
	// console.log(loginMap)


	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isFormValid) return;
		console.log("Submitted form");

		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const isDuplicateEmail = existingUsers.some(user => user.email === form.email)

		if(isDuplicateEmail) {
			alert("Email address already exists");
			return
		}

		const newUser = {
			id:existingUsers.length+1,
			email: form.email,
			firstName:form.firstName,
			lastName:form.lastName,
			age:form.age,
			password:form.password
		}
		const updateUsers = [...existingUsers, newUser]

		// existingUsers.push(newUser);
		// Salvare în localStorage
        localStorage.setItem("users", JSON.stringify(updateUsers));

		setForm({
			email:"",
			firstName:"",
			lastName:"",
			age:"",
			password:"",
			confirmPassword: ""
		})
	};

	return (
		<div className="page__container">
		<form onSubmit={handleSubmit}  className="form__style">
			<h1 className="form__name">Register</h1>
			{/* <div className="login_input">
				<label className="input__name">Email</label>
				<input className="input__box"
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.email && <p>{errors.email.message}</p>}</span>
			</div>

			<div className="login_input">
				<label className="input__name">First Name</label>
				<input className="input__box"
					type="text"
					name="firstName"
					value={form.firstName}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.firstName && <p>{errors.firstName.message}</p>}</span>
			</div>
			<div className="login_input">
				<label className="input__name">Last Name</label>
				<input className="input__box"
					type="text"
					name="lastName"
					value={form.lastName}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.lastName && <p>{errors.lastName.message}</p>}</span>
			</div>
			<div className="login_input">
				<label className="input__name">Age</label>
				<input className="input__box"
					type="text"
					name="age"
					value={form.age}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.age && <p>{errors.age.message}</p>}</span>
			</div>
			<div className="login_input">
				<label className="input__name">Password</label>
				<input className="input__box"
					type="password"
					name="password"
					value={form.password}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.password && errors.password.message}</span>
			</div>
			<div className="login_input">
				<label className="input__name">Confirm Password</label>
				<input className="input__box"
					type="password"
					name="confirmPassword"
					value={form.confirmPassword}
					onChange={handleChange}
				/>
				<span className="error__message">
					{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
				</span>
			</div> */}
			{RegisterInputs}

			<button className="login__register__button" type="submit" disabled={!isFormValid}>
				Sign up
			</button>
		</form>
		</div>
	);
}

export default Register;
