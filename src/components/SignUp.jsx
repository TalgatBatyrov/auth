import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from './Form';


const SignUp = () => {
    const signUp = async (email, password) => {
        const auth = getAuth();
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response.user);
    }
    return (
        <div>
            <Form title={'sign up'} handleClick={signUp} />
        </div>
    );
};

export default SignUp;