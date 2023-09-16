import React from 'react';
import { Link } from 'react-router-dom';

function handleLogout() {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
}

function Navbar() {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
            <Link to="/client-dashboard">Client Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default Navbar;
