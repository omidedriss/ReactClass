import { useState } from "react";

const State = () => {
  
  const [name, setResult] = useState(true);
  const [Toggle, setToggle] = useState("ON");

  const handlechange=()=>{
      console.log("1")
   if (name){
    setToggle("OFF") ; 
    setResult(false) ; 

   }else{
    setToggle("On") ; 
    setResult(true) ;

   }

  }

  const myButtonStyle = {
    color: "red",
    fontWeight: "bold",
    fontSize: 150
  };

  
  return (
    <div>
    
      <p style={myButtonStyle}>omidn </p>
      <button style={myButtonStyle} onClick={handlechange} >  {Toggle} </button>

    </div>
  );
};

export default State;
