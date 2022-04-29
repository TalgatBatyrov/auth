import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            or <NavLink to={'/register'}>Register</NavLink>
        </div>
    );
};

export default LoginPage;