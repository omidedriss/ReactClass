import react , {useState,useEffect} from 'react';
import axios from 'axios';
import {
    Link,
    NavLink,
    BrowserRouter,
    useSearchParams,
    useLocation,
  } from "react-router-dom";
import "./Login.css";


const Login = ()=>{

    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');
    
    const data={
       
        email: email,
        password: password,
      }

    
       


    

    const handleEmailChange =(event)=>{
        setemail(event.target.value);
    };

    const handlePasswordChange =(event)=>{
        setpassword(event.target.value);
    };

    const handleLogin = ()=>{
        
        axios
        .post("https://test.orbitsoftco.com/user_login.php", data)
        .then((response) => {
          console.log(response.data);
        }).catch(()=>{
            console.log("error");
        });
      
        
    };

    return(
       
        <body>
    
    <form
    onSubmit={(e)=>{
        e.preventDefault();
    }}
    >
        <h3>Login</h3>

        <label for="username">Username</label>
        <input type="text" value={email} onChange={handleEmailChange} placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password"  value={password} onChange={handlePasswordChange} placeholder="Password" id="password"/>

        <button onClick={handleLogin}>Log In</button>
        <button>register</button>
        <NavLink
              to={`/register`}
              
            >
              register
            </NavLink>

    </form>


        </body>
    );


};

export default Login;