import React, { useState } from "react";
import "./StyleTraining.css";
import styles from "./StyleTraining.module.css";
import Button from "./ButtonStyle";
const StyleTraining = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const myStyle = {
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div>
      <p className=" tagStyle">Style Learn1  times</p>
      <p style={myStyle}>Style Learn2 {count} times</p>
      <p style={{ color: "yellow", fontWeight: "bold" }}>
        Style Learn3 {count} times
      </p>
      <p className={styles.tagStyle}>Style Learn4 {count} times</p>

      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
      <input name="name" value={name} onChange={handleChange} />
    </div>
  );
};

export default StyleTraining;
