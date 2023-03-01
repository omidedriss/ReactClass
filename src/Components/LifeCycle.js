import React, { useState, useEffect } from "react";
const StopWatcher = (props) => {
  const [stopWatch, SetStopWatch] = useState(0);
  useEffect(() => {
    console.log("Mount");
  }, []);
  useEffect(() => {
    console.log("Update");
  });
  

  const stopWatchHandler = () => {
    SetStopWatch(stopWatch + 1);
  };
  useEffect(() => {
    let id = setInterval(stopWatchHandler, 1000);
    return () => {
      clearInterval(id);
      console.log("UnMount");
    };
  });
  return <div>{stopWatch}</div>;
};
export default StopWatcher;