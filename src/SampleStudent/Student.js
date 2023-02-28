import React from "react";
import "./studentStyle.css";
import Button from "./ButtonApp";
import MyButton from "./Button2";
const Student = (props) => {
  return (
    <div className="students">
      <label>شماره دانش آموزی :{props.id}</label>
      <label>نام و نام خانوادگی</label>
      <input type="text" value={props.name}  />

      <label>کلاس</label>
      <input type="text" value={props.classNumber} />

      <label>شماره تلفن</label>
      <input type="number" value={props.phoneNumber} />

      <label>ایمیل</label>
      <input type="email" value={props.email} />

      <label>
        <Button btnType="danger" clicked={props.delete}>
          حذف
        </Button>
        <Button btnType="success" clicked={props.add}>
          add
        </Button>
       
      </label>
    </div>
  );
};
export default Student;
