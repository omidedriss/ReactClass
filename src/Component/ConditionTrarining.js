import React from "react";
const Condition = (props) => {
  const User = () => {
    return <h1>Welcome Admin</h1>;
  };
  const Guest = () => {
    return <h1>Please Sign Up</h1>;
  };
  let text = <Guest />;
  if (props.milad12) {
    text = <User />;
  }

  return <div>{text}</div>;
};
export default Condition;
