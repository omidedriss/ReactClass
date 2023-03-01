import React from "react";
import{ useEffect, useState } from "react";
const stopWatcher=(props)=>{
    const[stopWatch,SetStopWatch]=useState(0);
    useEffect(()=>{
console.log("stopwatcher didmount")
    },[]  );

    const stopWatchHandler=()=>{
        SetStopWatch(stopWatch+1);
    };
useEffect(()=>{
    console.log("stopwatcher didupdate");
},[props.start]);
    useEffect(()=>{
        let id=setInterval(stopWatchHandler,1000);
        return()=>{

            clearInterval(id);
            console.log("stopwatcher didunmount");
        };
    });
    return <div>{stopWatch}</div>;
};

export default stopWatcher;