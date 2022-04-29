import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';


const SignUp = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const signUp = async (email, password) => {
        const auth = getAuth();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            dispath(setUser({
                email: response.user.email,
                token: response.user.accesToken,
                id: response.user.uid
            }));
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <Form title={'sign up'} handleClick={signUp} />
        </div>
    );
};

export default SignUp;