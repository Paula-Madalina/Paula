import { useForm } from "../../../customHooks/useForm";
import { getLoginMap } from "../../../maps/authMaps";
import { NavLink, useNavigate } from "react-router-dom";
import showToastr from "../../../services/toaster-service";

function Login() {
	const {form, handleChange, errors, isFormValid} = useForm({email:"", password:""});

	const loginMap = getLoginMap(handleChange, errors, form);

	const loginInputs = loginMap.map((input) =>

	<div className="login_input" key={input.id}>
		<div className="itworks">
			<label className="input__name">{input.label}</label>
			<input
                    className={`input__box ${!input.error.success ? 'error' : input.value.trim() && input.error.success ? 'valid' : ''}`}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                />
		</div>
		<span className="error__message">{input.error && input.error.message}</span>
	</div>)


	
	console.log(loginInputs)
	console.log(loginMap)
	
	const navigate = useNavigate();
	
	const handleSubmit = (e) => {
		e.preventDefault();

		return showToastr("error", "invalid login credentials!");


		if (!isFormValid) return;
		console.log("Submitted form");

		const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
		const foundUser = storedUsers.find((user)=> user.email===form.email && user.password===form.password);


		if(foundUser) {
			alert("login successfuly");
			navigate(`/`);
		} else {
			alert("invalid email or password");
			setErrors({
				...errors, 
				email:{message:"invalid email or password", success:false},
				password:{message:"invalid email or password", success:false},
			})
		}

	//  // Navigate to login page
	//  navigate(`/register`);

	};

	return (
		<div className="page__container  login__form">
		<form onSubmit={handleSubmit} className="form__style">
		<h1 className="form__name">Login</h1>

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
				<label className="input__name">Password</label>
				<input className="input__box"
					type="password"
					name="password"
					value={form.password}
					onChange={handleChange}
				/>
				<span className="error__message">{errors.password && errors.password.message}</span>
			</div> */}
		{loginInputs}

			<button className="login__register__button" type="submit" disabled={!isFormValid}>Login</button>
			<span className="navlink__button">Don't have an account? <NavLink className="navigation" to="/register">Register here</NavLink> </span>

		</form>

		</div>
	);
}

export default Login;
