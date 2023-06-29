import { useState } from 'react';

function Login() {
    const [user, setUser] = useState(null);

    const login = () => {};
    return (
        <form className='login'>
            <label>Login</label>
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
            <button onClick={login}>SignUp</button>
        </form>
    );
}

export default Login;
