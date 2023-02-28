import React,{useState} from 'react';
import './btnclass.css';
import Student from './student';

const Students=(props)=>{

let students = props.studentsList.map((student, index) => (
    <Student
      key={index}
      id={student.id}
      name={student.name}
      classNumber={student.classNumber}
      phoneNumber={student.phoneNumber}
      email={student.email}
      nameChanged={(event) => props.nameChanged(event, student.id)}
      delete={props.delete}
      add={props.add}
    />
  ));
  
  return students;

}

export default Students;