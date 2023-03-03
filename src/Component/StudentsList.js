import React, { useEffect } from "react";
import Student from "./StudentComponent";
import PropTypes from "prop-types";

const Students =(Props) =>{
    useEffect(() =>{},[Props.sList]);
    let students=Props.sList.map((student,index)=>(
    <Student>
        key={index}
        id={student.id}
        name={student.name}
        family={student.family}
        class={student.class}
        tel={student.tel}
        email={student.email}
        deleted={Props.deleted}
    </Student>));
    return(students);
};
export default Students;