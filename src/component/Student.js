import React from "react";
const STUDENT =(props)=>{
return
<div>
<label>نام و نام خانوادگی  :</label>
    <input type="text" id="t1" value={props.name} onchange={props.namechange}/>
    <lable>کلاس</lable>
    <input  type="text" value={props.classNum}/>
    <br></br>
    <br></br>
    <label>شماره تماس</label>
    <input  type="number" value={props.number}/>
    <br></br>
    <label>ایمیل</label>
    <input type="email" value={props.email}/>

return <div><button> login</button></div>
    </div>
}

export default STUDENT;