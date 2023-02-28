import React from "react";
import ButtonApp from "./buttonApp";

import "./newStudent.css";

const NewStudent = (props) => {
  const { studentName, studentClass, studentPhoneNumber, studentEmail } = props;
  const {
    studentNameHandler,
    studentClassHandler,
    studentPhoneNumberHandler,
    studentEmailHandler,
  } = props;
  return (
    <div className="NewPost">
      <h1>اضافه کردن دانش آموز جدید</h1>
      <label>نام و نام خانوادگی</label>
      <input type="text" value={studentName} onChange={studentNameHandler} />
      <label>کلاس</label>
      <input
        type="number"
        value={studentClass}
        onChange={studentClassHandler}
        maxLength={3}
      />
      <label>شماره تلفن</label>
      <input
        type="number"
        value={studentPhoneNumber}
        onChange={studentPhoneNumberHandler}
      />
      <label>ایمیل</label>
      <input type="email" value={studentEmail} onChange={studentEmailHandler} />
      <ButtonApp btnType="add" delete={props.add} text="اضافه" ></ButtonApp>
      
    </div>
  );
};
export default NewStudent;
