import React, { useState } from "react";
import "./mystyle.css";

import Button from "./mystyle.js";

const ToggleBtn = () => {
  const mylist = ["ali", "milad", "hasoode pelastiki", "mohsen"];
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("On");
  const handleChange = (e) => {
    if (status) {
      console.log(e.target.innerHTML);
      setStatus(false);
      setValue("On");
    } else {
      console.log(e.target.innerHTML);
      setStatus(true);
      setValue("Off");
    }
  };
  return (
    <div>
      <button className="teststyle" onClick={handleChange}>
        {value}
      </button>
      <ul>
        {mylist.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul>

      {mylist.map((c, index) => {
        return <Button key={index}>{c}</Button>;
      })}

      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
};

export default ToggleBtn;
