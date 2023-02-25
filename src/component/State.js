import { useState } from "react";
const Event =()=>{
    const [name ,setName]=useState("on");

    return(
      <button onClick={()=>{

        if (name=="on") {
            
            setName("off");

            }
        else setName("on")  ; 
      }
        
       
      }>
       {name} 
      </button>
    )
}

export default Event;


