import React from "react";
import "./button.css";
const MyButton = (props) => {

    const numbers = ["Success","Danger"];

   
        return(
            <button className={numbers[props.type]}>test</button>
        );
    
  
}
    

export default MyButton;