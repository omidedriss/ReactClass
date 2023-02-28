import { useState } from "react";
import MyStudents from "./MyStudent";
import React from "react";

const Student_list = () => {
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
    const deleteStudent = (index) => {
        const students = [...studentsState];
        students.splice(index, 1);
        setStudents(students);
      };
      const add = (index) => {
       alert("test")
      };
    return(
<div>
    <MyStudents
    studentsList={studentsState}
    delete={deleteStudent}
   add={add}
  />
  </div>
    )
}
export default Student_list;