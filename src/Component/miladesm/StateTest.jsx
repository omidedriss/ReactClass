import React, { useState } from "react";
const StateTest = () => {
  const [number, setNumber] = useState(10);
  const [name, setName] = useState("Ali");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>click {number}</p>
      <p>{name}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {" "}
        click me
      </button>
      <input name="name" value={name} onChange={handleChangeName} />
    </div>
  );
};

export default StateTest;
