
import React from "react"

export function mydata() {
    const res={
        name:"Mohammad",
        last_name:"Rostami"
    }
       
    
    return res;
};

export function Child_tag(){
    return <div>
        <welcome></welcome>

         this is div
         <input type="number" id="mynum"></input>
         </div>
};


export function welcome(props)
{
    return <div> from welcome {props.children}</div>
}

export function MyCounter(props)
{

    return <div>your mark is:{Math.floor(Math.random()*props.number)}</div>
}

//export default  mydata;
//export default  mytag;
//module.exports={mydata,mytag};
//export module={mydata,mytag};