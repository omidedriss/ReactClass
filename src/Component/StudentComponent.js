import React from "react";
import Button from "./ButtonApp";
import "./StudentStyle.css"

const Student =(Props) =>{
  console.log(Props.btnType);
  console.log(Props.btnText);
    return(
        <div className="students">
            <label>شماره دانشجویی:</label>
            <input type="number" value={Props.id} />

            <label>نام:</label>
            <input type="text" value={Props.name} onChange={Props.studentNameHandeler}/>
            
            <label>کلاس:</label>
            <input type="text" value={Props.classNumber} onChange={Props.studentClassNumberHandeler}/>
            
            <label>شماره تلفن:</label>
            <input type="number" value={Props.phoneNumber} onChange={Props.studentPhoneNumberHandeler}/>
            
            <label>ایمیل:</label>
            <input type="email" value={Props.email} onChange={Props.studentEmailHandeler}/>

            <label>
              <Button Clicked={Props.Clicked} btnType={Props.btnType} btnText={Props.btnText}></Button>
            </label>
    
        </div>
    ); 
};

export default React.memo(Student);