import React, { useState, useEffect } from "react";
import StopWatcher from "./LifeCycle";
const CheckLifeCycle = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    SetIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    SetIsLoggedIn(false);
  };
  let button;
  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>LogOut</button>;
  } else {
    button = <button onClick={handleLoginClick}>LogIn</button>;
  }

  return (
    <div>
      {isLoggedIn ? <StopWatcher start={true} /> : null}
      {button}
    </div>
  );
};
export default CheckLifeCycle;
