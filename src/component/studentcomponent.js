import React, { useState } from "react";
import Students from "./students";
import NewStudent from "./newstudent";

const StudentsComponent = () => {


  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentEmail, setStudentEmail] = useState("");



  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  };
  const studentClassHandler = (event) => {
    setStudentClass(event.target.value);
  };
  const studentPhoneNumberHandler = (event) => {
    setStudentPhoneNumber(event.target.value);
  };
  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  };


const stdelete=(index)=>{
  const students = [...studentsState];
  students.splice(index, 1);
  setStudents(students);

}

const stadd=()=>{
  const newStudentsState = [...studentsState];
  newStudentsState.push({
    id: studentsState.length,
    name: studentName,
    classNumber: studentClass,
    phoneNumber: studentPhoneNumber,
    email: studentPhoneNumber,
  });
  setStudents(newStudentsState);

}


  const [studentsState, setStudents] = useState([
    {
      id: 0,
      name: "Mahdi",
      classNumber: 2505,
      phoneNumber: 1234,
      email: "info@gmail.com",
    },
    {
      id: 1,
      name: "Alireza",
      classNumber: 214,
      phoneNumber: 12345,
      email: "info@gmail.com",
    },
    {
      id: 2,
      name: "Ali",
      classNumber: 224,
      phoneNumber: 123456,
      email: "info@gmail.com",
    },
    {
      id: 3,
      name: "Amirhossien",
      classNumber: 234,
      phoneNumber: 1234567,
      email: "info@gmail.com",
    },
  ]);

  return(
<div>
<NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        add={stadd}
      />


    <Students
        studentsList={studentsState} delete={stdelete} add={stadd}></Students>
        </div>
  )

}
export default StudentsComponent;

