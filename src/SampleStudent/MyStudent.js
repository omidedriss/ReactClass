import React from "react";
import Student from "./Student";
const MyStudents = (props) => {
  
   
   
     let students = props.studentsList.map((student, index) => (
        <Student
        name={student.name}
        delete={props.delete}
        add={props.add}
       />
   ));
   return students
  
  
  };
  export default React.memo(MyStudents);