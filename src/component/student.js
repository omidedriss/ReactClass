import React, { useState, useEffect } from "react";
import "./studentstyle.css";
import ButtonApp from "./buttonApp";

const Student=(props)=>{
    return(
        <div className="students">
      <label>شماره دانش آموزی :{props.id}</label>
     
      <label>نام و نام خانوادگی</label>
      <input type="text" value={props.name} onChange={props.nameChanged} />

      <label>کلاس</label>
      <input type="text" value={props.classNumber} />

      <label>شماره تلفن</label>
      <input type="number" value={props.phoneNumber} />

      <label>ایمیل</label>
      <input type="email" value={props.email} />

      <br></br>

      <label>
       <ButtonApp btnType="delete" delete={props.delete} text="حذف"></ButtonApp>
      </label>
      <label>
       <ButtonApp btnType="add" delete={props.add} text="اضافه" ></ButtonApp>
      </label>
    </div>
    )
}

export default Student;