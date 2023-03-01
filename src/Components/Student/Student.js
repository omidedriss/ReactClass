import React from "react";

import "./Student.css";


const Student = () => {
 
  return (
   <div >
  <h1>اضافه کردن دانش آموز جدید</h1>
  <label>نام و نام خانوادگی</label>
  <input type="text"  />
  <label>کلاس</label>
  <input
    type="number"
    
    
    maxLength={3}
  />
  <label>شماره تلفن</label>
  <input
    type="number"
    
  />
  <label>ایمیل</label>
  <input type="email"  />
  <input type="button"  >
    اضافه کردن
  </input>
</div>);
};
export default Student;

