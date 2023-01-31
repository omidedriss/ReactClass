import React, { useState } from "react";
const StateTestLearn = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <div>
      <p>Yo clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <input name="name" value={name} onChange={handleChange} />
    </div>
  );
};
export default StateTestLearn;
