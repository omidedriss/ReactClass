import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../SampleStudent/ButtonApp";
import reloadimage from "../../assets/images/reload_image.png";

import "./signIn.css";
const SignInWithValidate = (props) => {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [sumHolder, setSumHolder] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    generateCaptcha();
  }, []);
  const generateCaptcha = () => {
    let number1 = Math.floor(Math.random() * 10) + 1;
    let number2 = Math.floor(Math.random() * 10) + 1;
    setRandomNumber1(number1);
    setRandomNumber2(number2);
    let sum = number1 + number2;
    setSumHolder(sum);
  };
  const cpatchaHandler = (event) => {
    setCaptchaValue(Number(event.target.value));
  };
  const loginHandler = () => {
    if (sumHolder === captchaValue) {
      setErrorMessage("");
      const validateResult = validate();
      if (validateResult) {
        setCaptchaValue(0);
        generateCaptcha();
        setErrorMessage("");
        setPassword("");
        setUsername("");
      }
      // alert("valid");
    } else {
      // alert("not valid");
      setErrorMessage("captcah Invalid");
      return false;
    }
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const validate = () => {
    if (username === "") {
      setErrorMessage("username empty");
      return false;
    } else if (!username.includes("@") || !username.includes(".")) {
      setErrorMessage("username invalid");
      return false;
    } else if (password === "") {
      setErrorMessage("password empty");
      return false;
    } else if (password.length < 5) {
      setErrorMessage("password invalid");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <div
      style={{
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <p style={{ color: "red", fontSize: "56" }}>{errorMessage}</p>
      <img src={Logo} alt="Logo" />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={usernameHandler}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={passwordHandler}
      />
      <div className="captcha_view">
        <img src={reloadimage} alt="reloadimage" onClick={generateCaptcha} />
        <input type="text" onChange={cpatchaHandler} value={captchaValue} />
        <p>
          {randomNumber1} +{randomNumber2}=
        </p>
      </div>
      <Button clicked={loginHandler}>ورود</Button>
    </div>
  );
};
export default SignInWithValidate;
