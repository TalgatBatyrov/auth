import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp />
            <p>
                Already have an account <NavLink to={'/login'}>Sign in</NavLink>
            </p>
        </div>
    );
};

export default RegisterPage;