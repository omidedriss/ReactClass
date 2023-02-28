import React from "react";
import Student from "./Student";
const MyStudents = (props) => {
  
   
   
     let students = props.studentsList.map((student, index) => (
        
        <Student>
        
        name={student.name}
     
        </Student>
   ));
   return students
  
  
  };
  export default React.memo(MyStudents);