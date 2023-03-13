import React from "react";
import Textboxstyle from "./Style";
import "./style.css";

const STUDENT = (props) => {
  return <div >
    <label >نام و نام خانوادگی:</label>
    <input className="inputstyle" type="text" id="t1" value={props.name} onchange={props.namechange} />
    <br></br>
    <lable>کلاس:</lable>
    <input type="text" value={props.classNum} />
    <br></br>
    <br></br>
    <label>شماره تماس:</label>
    <input type="number" value={props.number} />
    <br></br>
    <label>ایمیل:</label>
    <input type="email" value={props.email} />
    <br></br>
    <button >ثبت نام</button>
  </div>
   
};

export default STUDENT;
