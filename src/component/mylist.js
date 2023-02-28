import React, { useState, useEffect } from "react";

const Mylist = (props) => {
  const strings = ["react", "react1", "react2", "react3"];

  const [isToggleOn, setisToggleOn] = useState("ON");

  const [timer, settimer] = useState(0);

  // const HandleClick = () => {
  //   setisToggleOn(!isToggleOn);
  // };

  const listitem = strings.map((x, index) => {
    return (
      <a href="#">
        {" "}
        <li key={index}>{x}</li>
      </a>
    );
  });

  const mywatch = () => {
    settimer(timer + 1);
  };

  useEffect(() => {
    alert("ones exec")
    return () => {
    };
  },[]);

  useEffect(() => {
    let id = setInterval(mywatch, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div>
      {/* <ul>{listitem}</ul> */}
      {/* <button onClick={HandleClick}>{isToggleOn ? "ON" : "off"}</button> */}

      {timer}
    </div>
  );
};
export default Mylist;
