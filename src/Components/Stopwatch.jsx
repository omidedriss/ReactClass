import * as React from "react";
import { useState, useEffect } from "react";
// import { clearInterval } from "timers";

export default function Stopwatch() {
  const [counter, SetCounter] = useState(0);
  useEffect(() => {
    console.log("update");
    setInterval(console.log("--"), 5000);
    SetCounter(counter + 1);
  });
  useEffect(() => {
    console.log("add");
    //SetCounter(counter + 1);
  }, []);

  const Start = () => {
    //SetCounter(counter + 1);
  };

  const End = () => {
    clearInterval();
  };
  return (
    <div>
      <label>{counter}</label>
      <button onClick={Start}>click</button>
      <button onClick={End}>End</button>
    </div>
  );
}
