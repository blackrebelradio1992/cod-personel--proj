import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavbar({ isAuthenticated, onLogout }) {
    return (
        <nav>
            <h1>Gamer Ranker</h1>
            <Link to="/">Home</Link>
            <Link to="/signup">User Signup</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/modernwarfare2">Modern Warfare 2</Link>

            {isAuthenticated ? (
                <button onClick={onLogout}>Logout</button>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                </>
            )}
        </nav>
    );
}

export default CustomNavbar;
