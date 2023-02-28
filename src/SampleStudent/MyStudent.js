import React from "react";
import Student from "./Student";
const MyStudents = (props) => {
  let info=["Mohammad","Rostami"];
   

     let students = info.map((student, index) => (
        <Student>
       
        </Student>
   ));
   return students
  
  
  };
  export default React.memo(MyStudents);