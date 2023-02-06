import { useState } from "react";
import "./Styletest.css";
const State = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handlechange=(e)=>{
    setName(e.target.value);
    console.log(name);
  }

  return (
    <div>
      <p className="mystyle">clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>

      <input name="name"  onChange={handlechange}/>
    </div>
  );
};

export default State;
