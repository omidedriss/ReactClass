import React, { useState } from "react";
export const Label=(props)=>{
   
    
    return(
        
        <input readOnly className="mylabel"  value={props.label_text}  ></input>
    )

}


