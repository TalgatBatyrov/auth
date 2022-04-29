import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeUser } from '../store/userSlice';

const HomePage = () => {
    const dispath = useDispatch();
    const { isAuth, email } = useSelector(state => state.user);

    return (
        <div>
            {isAuth
                ?
                <div>
                    <h1>Wellcome  {email}</h1>
                    <button onClick={() => dispath(removeUser())}>Log out from {email}</button>
                </div>
                :
                <Navigate to={'/login'} />}
        </div>
    );
};

export default HomePage;