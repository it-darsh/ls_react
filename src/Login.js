import React from 'react';
import Button from './Button';

function Login() {
    return (
        <div>
            <div>Login</div>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <div><Button text="Submit" myClick={() => {console.log('>Log in')}}/></div>
        </div>
    )
}

export default Login;