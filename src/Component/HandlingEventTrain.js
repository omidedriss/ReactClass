import React, { useState } from "react";
const HandlingEvent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <div>
      <p>Event {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <input
        name="name"
        value={name}
        onChange={handleChange}
        onBlur={() => console.log("imput blured")}
        onFocus={() => console.log("input focused")}
      />
    </div>
  );
};

export default HandlingEvent;
