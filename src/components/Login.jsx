import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsAuth, setUser } from '../store/userSlice';
import Form from './Form';

const Login = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        const auth = getAuth();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            dispath(setIsAuth(false));
            dispath(setUser({
                email: response.user.email,
                token: response.user.accesToken,
                id: response.user.uid
            }));
            dispath(setIsAuth(true));
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <Form title={'sign in'} handleClick={handleLogin} />
        </div>
    );
};

export default Login;