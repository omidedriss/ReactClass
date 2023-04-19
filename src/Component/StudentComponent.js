import React from "react";
import "./StudentStyle.css"

const Student =(Props) =>{
    return(
        <div className="students">
            <label>شماره دانشجویی:</label>
            <input type="number" value={Props.id} />

            <label>نام:</label>
            <input type="text" value={Props.name} onChange={Props.nameChanged}/>

            
            <label>نام خانوادگی:</label>
            <input type="text" value={Props.family} />

            
            <label>کلاس:</label>
            <input type="text" value={Props.class} />

            
            <label>شماره تلفن:</label>
            <input type="number" value={Props.phoneNumber} />

            
            <label>ایمیل:</label>
            <input type="email" value={Props.email} />

            <label>
                <Button btnType="danger" clicked={Props.deleted}>
                    حذف
                </Button>
            </label>

        </div>
    ); 
};

export default Student;
