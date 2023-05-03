import React from 'react';
import Logo from '../../assets/images/logo.png';
import Button from '../SampleStudent/ButtonApp';
import './signIn.css';
const SignIn =(props)=>(
    <div>
        <img src={Logo} alt="Logo" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <Button>ورود</Button>
    </div>
)
export default SignIn;