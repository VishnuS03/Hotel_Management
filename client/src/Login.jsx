import React, { useState } from 'react';
import "./App.css";

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.success) {
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='signup-container'>
        <div className='signup'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>E-Mail</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;