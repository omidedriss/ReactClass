import React, { useState } from "react";

const ToggleBtn = () => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("On");
  const handleChange = (e) => {
    if (status) {
      console.log(e.target.value);
      setStatus(false);
      setValue("On");
    } else {
      console.log(e.target.value);
      setStatus(true);
      setValue("Off");
    }
  };
  return (
    <div>
      <button onClick={handleChange}>{value}</button>
    </div>
  );
};

export default ToggleBtn;
