import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../SampleStudent/ButtonApp";
import reloadimage from "../../assets/images/reload_image.png";
import { AuthContext } from "./authContextFive";
import { ThemeContext } from "./themeContext";
import "./signIn.css";
const SignInNineWithContextAndLocalStorage = (props) => {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [sumHolder, setSumHolder] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  // const auth = useContext(AuthContext);
  // console.log(auth);
  const themeContext = useContext(ThemeContext);
  const { lightTheme, light, dark } = themeContext;
  const theme = lightTheme ? light : dark;
  // const { logout } = useContext(AuthContext);

  // const authContext = useContext(AuthContext);

  // authContext.authetication = false;

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
        fetch("https://test.orbitsoftco.com/user_login.php", {
          method: "POST",
          headers: {
            Accept: "applicaion/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson === "Data Matched") {
              setCaptchaValue(0);

              setErrorMessage("");
              setPassword("");
              setUsername("");
              // alert("OK");
              //console.log(login);
              dispatch({ type: "login", payload: username });
            } else {
              setErrorMessage(responseJson);
            }
          })
          .catch((error) => {
            alert(error);
          });
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
  let auth = false;
  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    auth = true;
  }
  return (
    <div
      style={{ background: theme.bg, color: theme.syntax, textAlign: "center" }}
    >
      <p style={{ color: "red", fontSize: "56" }}>{errorMessage}</p>
      <img
        src={Logo}
        alt="Logo"
        onClick={() => {
          themeContext.changeTheme();
        }}
      />
      {auth ? (
        <>
          <h1>Profile</h1>
          <Button clicked={() => dispatch({ type: "logout" })}>خروج</Button>
        </>
      ) : (
        <div>
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
            <img
              src={reloadimage}
              alt="reloadimage"
              onClick={generateCaptcha}
            />
            <input type="text" onChange={cpatchaHandler} value={captchaValue} />
            <p style={{ color: theme.syntax }}>
              {randomNumber1} +{randomNumber2}=
            </p>
          </div>
          <Button clicked={loginHandler}>ورود</Button>
        </div>
      )}
    </div>
  );
};
export default SignInNineWithContextAndLocalStorage;
