import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';
import Form from './Form';

const Login = () => {
    const dispath = useDispatch();
    const { email, token } = useSelector(state => state.user)

    const handleLogin = async (email, password) => {
        const auth = getAuth();
        const response = await signInWithEmailAndPassword(auth, email, password)
        dispath(setUser(response.user))
        console.log(response.user);
    }

    return (
        <div>
            <Form title={'sign in'} handleClick={handleLogin} />
            {email ? email : 'no'}
        </div>
    );
};

export default Login;