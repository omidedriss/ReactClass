import React from "react";
import Button from "./ButtonApp";
import "./StudentStyle.css"

const Student =(Props) =>{
  const { studentName, studentClass, studentPhoneNumber, studentEmail } = Props;
  const {
    studentNameHandler,
    studentClassHandler,
    studentPhoneNumberHandler,
    studentEmailHandler,
  } = Props;
  
  console.log(Props.btnType);
  console.log(Props.btnText);
    return(
        <div className="students">
            <label>شماره دانشجویی:</label>
            <input type="number" value={Props.id} />

            <label>نام:</label>
            <input type="text" value={Props.name} />
            
            <label>کلاس:</label>
            <input type="text" value={Props.classNumber} />
            
            <label>شماره تلفن:</label>
            <input type="number" value={Props.phoneNumber} />
            
            <label>ایمیل:</label>
            <input type="email" value={Props.email} />

            <label>
              <Button Clicked={Props.Clicked} btnType={Props.btnType} btnText={Props.btnText}></Button>
            </label>
    
        </div>
    ); 
};

export default React.memo(Student);