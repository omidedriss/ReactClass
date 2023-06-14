import react , {useState} from 'react';
import "./Login.css";

const Login = ()=>{
    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');

    const handleEmailChange =(event)=>{
        setemail(event.target.value);
    };

    const handlePasswordChange =(event)=>{
        setpassword(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
    };

    return(
       
        <body>
    
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>

    </form>


        </body>
    );


};

export default Login;