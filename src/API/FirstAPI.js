import React, { useState, useEffect } from "react";
import axios from "axios";
const APITest = ()=>{
    const [poststate,setpoststate]=useState([]);
    axios.get("https://jsonplaceholder.ir/posts").then((response)=>{
        console.log(response.data);
        const posts=response.data;
        setpoststate(posts);
    })

    return(
        
     <div style={{ flexDirection: "row" }}>
      {poststate.map((p) => {
        return <p>{p.title}</p>;

      })}
    </div>
    );
}
export default APITest;