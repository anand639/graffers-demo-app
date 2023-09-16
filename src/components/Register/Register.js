import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../services/api";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("Client"); // Default to 'Client'
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Simple validation
		if (!email || !password) {
			setError("Email and password are required.");
			return;
		}

		if (password.length < 6) {
			setError("Password should be at least 6 characters.");
			return;
		}
		try {
			const response = await registerUser({ email, password, role });
			if (response.msg === "User registered successfully") {
				// Redirect to login page or show a success message
				window.location.href = "/login";
			} else {
				// Handle error (e.g., show an error message to the user)
				console.error(response.msg);
			}
		} catch (error) {
			console.error("Error registering:", error);
		}
	};
	return (
		<div className="register-container">
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Role:</label>
					<select value={role} onChange={(e) => setRole(e.target.value)}>
						<option value="Client">Client</option>
						<option value="Admin">Admin</option>
					</select>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default Register;
