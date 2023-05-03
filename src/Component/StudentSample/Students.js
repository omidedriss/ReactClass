import React, { useEffect } from "react";
import Student from "./Student";
import "./StudentStyle.css";
import PropTypes from "prop-types";

const Students = (props) => {
  useEffect(() => {
    // console.log(props.studentsList);
  }, [props.studentsList]);
  let Students = props.studentsList.map((student, index) => (
    <Student
      key={index}
      id={student.id}
      name={student.name}
      classNumber={student.classNumber}
      phoneNumber={student.phoneNumber}
      email={student.email}
      studentNameHandeler={props.studentNameHandeler} 
      studentClassNumberHandeler={props.studentClassNumberHandeler} 
      studentPhoneNumberHandeler={props.studentPhoneNumberHandeler} 
      studentEmailHandeler={props.studentEmailHandeler}       
      Clicked={props.Clicked}
      btnText={props.btnText}
      btnType={props.btnType}
    />
  ));
  if (props.toggle) {
    return <div className="student-section">{Students}</div>;
  }
  return Students;
};
export default React.memo(Students);
Students.propTypes = {
  studentsList: PropTypes.array.isRequired,
  toggle: PropTypes.bool.isRequired,
};

