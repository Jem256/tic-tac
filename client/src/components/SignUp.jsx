import { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

function SignUp() {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const signUp = () => {
        Axios.post('http://localhost:3001/signup', user).then((res) => {
            const {
                token,
                userId,
                firstName,
                lastName,
                username,
                password,
                hashedPassword,
            } = res.data;

            cookies.set('token', token);
            cookies.set('userId', userId);
            cookies.set('firstName', firstName);
            cookies.set('lastName', lastName);
            cookies.set('username', username);
            cookies.set('password', password);
            cookies.set('hashedPassword', hashedPassword);
        });
    };

    return (
        <form className='signUp'>
            <label>Sign Up</label>
            <input
                type='text'
                placeholder='First Name'
                onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                }}
            />
            <input
                type='text'
                placeholder='Last Name'
                onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                }}
            />
            <input
                type='text'
                placeholder='Username'
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                }}
            />
            <input
                type='password'
                placeholder='Password'
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}
            />
            <button onClick={signUp}>SignUp</button>
        </form>
    );
}

export default SignUp;
