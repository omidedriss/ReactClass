import React, { useState } from 'react'

export const MyButton = (props) => {
    const [aaa,setAaa]=useState(props.v)
    const r=()=>{
        console.log(aaa);
        console.log(props.v);
        //if (props.v==='1'){
         //   return ["btn btn-danger","delete"];
        //}
        //return ["",""];
    }
  return (
    <button type="submit" className={()=>{r();}}>{props.v}</button>
  )
}
