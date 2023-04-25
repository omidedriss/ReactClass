import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../SampleStudent/ButtonApp";
import reloadimage from "../../assets/images/reload_image.png";

import "./signIn.css";
const SignIn = (props) => {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [sumHolder, setSumHolder] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);
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
      alert("valid");
    } else {
      alert("not valid");
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <img src={Logo} alt="Logo" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <div className="captcha_view">
        <img src={reloadimage} alt="reloadimage" onClick={generateCaptcha} />
        <input type="text" onChange={cpatchaHandler} />
        <p>
          {randomNumber1} +{randomNumber2}=
        </p>
      </div>
      <Button clicked={loginHandler}>ورود</Button>
    </div>
  );
};
export default SignIn;
