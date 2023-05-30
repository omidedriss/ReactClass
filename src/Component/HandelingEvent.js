import { useState } from "react";
import "./Styletest.css";
const Event = () => {
  //https://reactjs.org/docs/handling-events.html
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isToggleOn, setisToggleOn] = useState(true);
  const handlechange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const action = (e) => {
    e.preventDefault();
    console.log("click");
  };
  const handleClick = () => {
    setisToggleOn(!isToggleOn);
  };
  return (
    <div>
      <p className="mystyle">clicked {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

      <input
        name="name"
        onChange={handlechange}
        onFocus={() => {
          console.log("Focuse");
        }}
        onBlur={() => {
          console.log("onBlur");
        }}
        onCopy={() => {
          console.log("onCopy");
        }}
      />
      <a href="https://orbitsoftco.com" onClick={action}>
        {" "}
        Click
      </a>
      <button  onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
      {/* function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
} */}
    </div>
  );
};

export default Event;
