/*import React, { useEffect } from "react";
import Student from "./StudentComponent";
import PropTypes from "prop-types";

const Students =(Props) =>{
    useEffect(() =>{},[Props.sList]);
    let students=Props.sList.map((student,index)=>(
    <Student
        key={index}
        id={student.id}
        name={student.name}
        family={student.family}
        class={student.class}
        tel={student.tel}
        email={student.email}
        deleted={Props.deleted}
    />));
    return(students);
};
export default Students;*/


import React, { useEffect } from "react";
import Student from "./StudentComponent";
import "./StudentStyle.css";
import PropTypes from "prop-types";

const Students = (props) => {
  useEffect(() => {
    // console.log(props.studentsList);
  }, [props.studentsList]);
  let students = props.studentsList.map((student, index) => (
    <Student
      key={index}
      id={student.id}
      name={student.name}
      classNumber={student.classNumber}
      phoneNumber={student.phoneNumber}
      email={student.email}
      nameChanged={(event) => props.nameChanged(event, student.id)}
      deleted={props.deleted}
    />
  ));
  if (props.toggle) {
    return <div className="student-section">{students}</div>;
  }
  return students;
};
export default React.memo(Students);
Students.propTypes = {
  studentsList: PropTypes.array.isRequired,
  nameChanged: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};