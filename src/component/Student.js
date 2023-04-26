import React from "react";
import Textboxstyle from "./Style";
import "./StudentStyle.css";

const STUDENT = (props) => {
  return <div className="students" >
    <label >نام و نام خانوادگی:</label>
    <input  value={props.name} onChange={props.onChangehandle} />
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
    <button onClick={props.add}>ثبت نام</button>
  </div>
   
};

export default STUDENT;
