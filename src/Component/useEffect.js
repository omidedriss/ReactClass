import { useEffect, useState } from "react";

const StopWatch=(props)=>{
    const[stpwtch,setstpwtch]=useState(0);
    useEffect(()=>{
        console.log("useEffect did");
    });

    const Handler= ()=>{
        setstpwtch(stpwtch+1);
    };

    useEffect(()=>{
        let id=setInterval(Handler,2000);

        return()=>{clearInterval(id);}
    });

    return (<div>{stpwtch}</div>)



}

export default StopWatch;
