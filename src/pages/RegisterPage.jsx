import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <p>
                Already have an account <NavLink to={'/login'}>Sign in</NavLink>
            </p>
        </div>
    );
};

export default RegisterPage;