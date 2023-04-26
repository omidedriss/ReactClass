import React, { useEffect } from "react";
import Student from "./Student";
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
