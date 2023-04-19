import React, { useState } from "react";
import Students from "./students";
//import NewStudent from "./newStudent";

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

  return(
    <Students
        studentsList={studentsState}
        //toggle={toggle}
        />
  );
}