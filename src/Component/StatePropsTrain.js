import React, { useState } from "react";
const StateTestLearn = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  // let name;
  const handleChange = (e) => {
    setName(e.target.value);
    // name = e.target.value;
    console.log(e.target.value);
  };

  return (
    <div>
      <p>clicked {count}</p>
      <p>{name}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <input name="name" value={name} onChange={handleChange} />
    </div>
  );
};
export default StateTestLearn;
