import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
    const auth = useSelector(state => state.auth.isAuth);
    console.log(auth, 'user');
    if (!auth) {
        return <Navigate to={'login'} />
    }
    return (
        <div>
            Hello User
        </div>
    );
};

export default HomePage;