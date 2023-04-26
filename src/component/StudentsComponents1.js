import React, { useState,useEffect } from "react";
import Students from "./Students";
import "./StudentStyle.css";
import STUDENT from "./Student";
import Button from "./Button";
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
  const [studentName, setStudentName] = useState("");
  const studentNameHandler = (e) => {
    setStudentName(e.target.value);
  };
  const find=(e)=>{
    setsearch(e.target.value);
   console.log(search);
  }
  const addStudent = () => {
    const newStudentsState = [...studentsState];
    newStudentsState.push({
      id: studentsState.length,
      name: studentName,
     // classNumber: studentClass,
     // phoneNumber: studentPhoneNumber,
     // email: studentPhoneNumber,
    });
    setStudents(newStudentsState);
  };
const [arrayHolder, setArrayHolder] = useState([]);
const [search, setsearch ]= useState("");
useEffect(() => {
  setArrayHolder(studentsState);
 // inputEl.current.focus();
}, []);
const searchFilterFunction = (e) => {
  const itemData = arrayHolder.filter((item) => {
    const itemData = item.name.toUpperCase();
    const textData = e.target.value.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
}


const [toggle,settoggle]=useState(false);
return(
<div> 
 <STUDENT add={addStudent} name={studentName} onChangehandle={studentNameHandler} >

 </STUDENT>
  <button
  onClick={()=>{
    settoggle(!toggle);
  }}>
  toggle
  </button>
  <br></br>
  <input onChange={find} value={search}></input>
<Students
studentsList={studentsState}
toggle={toggle}
/>;
</div>
);
}
export default StudentsComponent;
