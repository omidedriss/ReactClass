import React from "react";
import "./StudentStyle.css"
const Student =(Props) =>{
    return(
        <div className="students">
            <label>شماره دانشجویی:</label>
            <input type="text" value={Props.id} />

            <label>نام:</label>
            <input type="text" value={Props.name} />

            
            <label>نام خانوادگی:</label>
            <input type="text" value={Props.family} />

            
            <label>کلاس:</label>
            <input type="text" value={Props.class} />

            
            <label>شماره تلفن:</label>
            <input type="number" value={Props.tel} />

            
            <label>ایمیل:</label>
            <input type="email" value={Props.email} />

            <input type="button" value="delete"/>
        </div>
    ); 
};

export default Student;
