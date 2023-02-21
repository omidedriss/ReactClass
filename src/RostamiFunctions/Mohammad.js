
import React from "react"

import { useState } from "react"
export function Mr2_user_info() {
    const res={
        name:"Mohammad",
        last_name:"Rostami"
    }
       
    
    return res;
};

export function Mr2_child_tag(){
    return <div>
        <welcome></welcome>

         this is div
         <input type="number" id="mynum"></input>
         </div>
};


export function Mr2_welcome(props)
{
    return <p > welcome to <Site_name/></p>
}

export  function Site_name()
{
    return " React Educatuin Website "
}

export function Mr2_user_Mark(props)
{

    return <div>your mark is:{Math.floor(Math.random()*props.number)}</div>
}
export const MyList = (props) => {
    const numbers = ["mohammad","reza"];
    const listItem = numbers.map((x, index) => {
      console.log(index);
      return <li key={index}>{x}</li>;
    });
    return (
      <div>
        <ul>{listItem}</ul>
      </div>
    );
  };



export const MyButton=(props)=>{

  
    const [btn_text, setbtn_text] = useState("On");
    let counter=0;
    
    const btn_click=(e)=>{
      
        if(e.target.value=="On")
        {
            setbtn_text("OFF")
        }else
        {
            setbtn_text("On")
        }
      
     
    }

    return(
        <div>
        <button className="mybutton" onClick={btn_click} value={btn_text}>{btn_text}</button>
      
        </div>
    )
}


//export default  mydata;
//export default  mytag;
//module.exports={mydata,mytag};
//export module={mydata,mytag};