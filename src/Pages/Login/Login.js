import React from "react";
//import { Route } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Component/StudentSample/ButtonApp";

const Login =(props)=>{
return(
    <div className="background">
        <div className="loginBox">
            <label>Login Now</label>
            <br />
            <label>Username*</label>
            <input type="text" placeholder="Enter your Username" />
            <br />

            <label>Password*</label>
            <input type="password" placeholder="Enter your Password" />
            <br />

            {/* <input type="" ></input> */}
            <br />

            {/* <Button btnType="success" btnText="login" />  */}
            <br />

<Link  to="../../Component/header/SignIn" >Dont have an account?</Link>
<Link to="/ForgotPassword">Forgot password?</Link>
        </div>
    </div>
);
}

export default Login;