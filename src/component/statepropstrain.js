import React,{useState } from "react";
const StateTestLearn=()=>{
    const[Count,setCount]=useState(0);
    const[Name,setName]=useState("");


return(
    <div>
        <p>clicked {Count} times </p>
        <button  style={{width:"50px",height:"25px",color:"red"}} onClick={()=>{setCount(Count+1)}}>click me</button>
        <input Name="name" value={Name}/>
    </div>
);
};
export default StateTestLearn;