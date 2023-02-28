import React, { useState,useContext } from "react";
import Calc_Body from "./Calc_Body";

export const Button=(props)=>{
    return(
        <div>
        <button className="mybutton" onClick={props.onClick} value={props.text}>{props.text}</button>
      
        </div>
    )
}


