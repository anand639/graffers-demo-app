import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await loginUser({ email, password });
        if (response.token) {
            // Store the token in local storage and redirect user
            localStorage.setItem('authToken', response.token);
            // Redirect to dashboard based on role (this is a simple example)
            window.location.href = response.user.role === 'Admin' ? '/admin-dashboard' : '/client-dashboard';
        } else {
            // Handle error (e.g., show an error message to the user)
            console.error(response.msg);
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }


};

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
