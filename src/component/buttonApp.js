import React,{useState} from 'react';
import './btnclass.css';

const ButtonApp=(props)=>{

      
  let classes = [""];
  switch (props.btnType) {
    case "delete":
      classes.push("Danger");
      break;
    case "add":
      classes.push("Success");
      break;
    default:
      break;
  }      
      return(
        <button  className={classes.join(" ")} onClick={props.delete}>{props.text}</button>
    );
    
   
};

export default ButtonApp

