import { useState } from "react";

function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({ email: "", password: "" });
	const [isFormValid, setIsFormValid] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		// console.log(name);
		// console.log(value);
		setForm({ ...form, [name]: value });
		validateFields(name, value);
	};

	const validateFields = (fieldName, inputValue) => {
		let newErrors = { ...errors };

		const emailRegex = /\S+@\S+\.\S+/;
		if (fieldName === "email") {
			if (!inputValue) {
				newErrors.email = "Email is required";
				setIsFormValid(false);
			} else if (!emailRegex.test(inputValue)) {
				newErrors.email = "Email is in the wrong format";
				setIsFormValid(false);
			} else {
				newErrors.email = "";
				setIsFormValid(true);
			}
		}
		if (fieldName === "password") {
			if (!inputValue) {
				newErrors.password = "Password is required";
				setIsFormValid(false);
			} else {
				newErrors.password = "";
				setIsFormValid(true);
			}
		}
		setErrors(newErrors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isFormValid) return;
		console.log("Submitted form");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="login_input">
				<label>Email</label>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<span>{errors.email && <p>{errors.email}</p>}</span>
			</div>
			<div className="login_input">
				<label>Password</label>
				<input
					type="password"
					name="password"
					value={form.password}
					onChange={handleChange}
				/>
				<span>{errors.password && errors.password}</span>
			</div>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
