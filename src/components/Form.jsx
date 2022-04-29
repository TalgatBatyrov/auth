import React, { useState } from 'react';

const Form = ({ title, handleClick }) => {
    const [values, setValue] = useState({ email: '', password: '' })
    return (
        <div>
            <input
                type="email"
                value={values.email}
                onChange={e => setValue({ ...values, email: e.target.value })}
                placeholder={'email'}
            />
            <input
                type="password"
                value={values.password}
                onChange={e => setValue({ ...values, password: e.target.value })}
                placeholder={'password'}
            />
            <button onClick={() => handleClick(values.email, values.password)}>{title}</button>
        </div>
    );
};

export default Form;