import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            or <NavLink to={'/register'}>Register</NavLink>
        </div>
    );
};

export default LoginPage;