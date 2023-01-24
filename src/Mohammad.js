
import React from "react"

export function mydata() {
    const res={
        name:"Mohammad",
        last_name:"Rostami"
    }
       
    
    return res;
};

export function Mmytag(){
    return <div>
        <welcome></welcome>
         this is div</div>
};


export function welcome(props)
{
    return <div> from welcome {props.children}</div>
}

export function MyCounter()
{
    return <div>your mark is:{Math.floor(Math.random()*20)}</div>
}
//export default  mydata;
//export default  mytag;
//module.exports={mydata,mytag};
//export module={mydata,mytag};