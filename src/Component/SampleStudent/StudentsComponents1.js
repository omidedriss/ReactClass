import React, { useState } from "react";
import Students from "./students";
import NewStudent from "./newStudent";
const StudentsComponent = () => {
  const [studentsState, setStudents] = useState([
    {
      id: 0,
      name: "Mahdi",
      classNumber: 204,
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
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    //console.log(studentIndex);
    const student = { ...studentsState[studentIndex] };
    //console.log(student);
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };
  const deleteStudent = (index) => {
    const students = [...studentsState];
    students.splice(index, 1);
    //studentsState.splice(index,1);
    setStudents(students);
  };

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
  const addStudent = () => {
    const newStudentsState = [...studentsState];
    newStudentsState.push({
      id: studentsState.length,
      name: studentName,
      classNumber: studentClass,
      phoneNumber: studentPhoneNumber,
      email: studentPhoneNumber,
    });
    setStudents(newStudentsState);
  };

  return (
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
        clicked={addStudent}
      />

      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        deleted={deleteStudent}
        toggle={toggle}
      />
    </div>
  );
};

export default StudentsComponent;
