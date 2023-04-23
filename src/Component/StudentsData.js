import React, { useState } from "react";
import Button from "./ButtonApp";
import Student from "./StudentComponent";
import Students from './StudentsList';
const StudentsData = () => {
  const [Search, setSearch] = useState();
  const [Toggle, setToggle] = useState(false);
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
  const [Name, setName] = useState('');
  const [ClassNumber, setClassNumber] = useState('');
  const [PhoneNumber, setPhomeNumber] = useState('');
  const [Email, setEmail] = useState('');
  
  const find=(e)=> {
    setSearch(e.target.value);
    console.log(Search)
    return(
      <></>
    );
  };

  const addStudent=()=>{
    const newStudentsState = [...studentsState];
    newStudentsState.push({
      id: studentsState.length,
      name: Name,
      classNumber: ClassNumber,
      phoneNumber: PhoneNumber,
      email: Email,
    });
    setStudents(newStudentsState);   
  }
   
  const studentNameHandeler=(e)=>{
    setName(e.target.value);
  }

  
  const studentClassNumberHandeler=(e)=>{
    setClassNumber(e.target.value);
  }

  
  const studentPhoneNumberHandeler=(e)=>{
    setPhomeNumber(e.target.value);
  }

  
  const studentEmailHandeler=(e)=>{
    setEmail(e.target.value);
  }

  const deleteStudent=(e)=>{
  }

  return(
    <div>
      <Student 
      name={Name} 
      classNumber={ClassNumber} 
      phoneNumber={PhoneNumber} 
      email={Email} 
      Clicked={addStudent} 
      studentNameHandeler={studentNameHandeler} 
      studentClassNumberHandeler={studentClassNumberHandeler} 
      studentPhoneNumberHandeler={studentPhoneNumberHandeler} 
      studentEmailHandeler={studentEmailHandeler} 
      btnType="normal"
      btnText="ADD"/>

      {/* <input onChange={find} value={Search}/> */}

      <Button Clicked={()=> setToggle(!Toggle)}  btnType='Warning' btnText="Toogle"></Button>
        
      <Students
        studentsList={studentsState}    
        toggle={Toggle} 
        Clicked={deleteStudent}   
        studentNameHandeler={studentNameHandeler} 
        studentClassNumberHandeler={studentClassNumberHandeler} 
        studentPhoneNumberHandeler={studentPhoneNumberHandeler} 
        studentEmailHandeler={studentEmailHandeler} 
        btnType="danger"
        btnText="DELETE"
      />
    </div>
  );
};

export default StudentsData;