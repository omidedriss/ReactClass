import React, { useState, useEffect } from "react";
const StopWatcher = (props) => {
  const [stopWatch, SetStopWatch] = useState(0);
  useEffect(() => {
    console.log("stopWatcher DidMount");
  }, []);
  useEffect(() => {
    console.log("stopWatcher DidUpdate");
  });
  useEffect(() => {
    console.log("stopWatcher DidUpdate");
  }, [props.start]);

  const stopWatchHandler = () => {
    SetStopWatch(stopWatch + 1);
  };
  useEffect(() => {
    let id = setInterval(stopWatchHandler, 1000);
    return () => {
      clearInterval(id);
      console.log("stopWatcher DidUnMount");
    };
  });
  return <div>{stopWatch}</div>;
};
export default StopWatcher;
