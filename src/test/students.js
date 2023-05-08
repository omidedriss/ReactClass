import React, { useEffect } from "react";
import Student from "./student";
import PropTypes from "prop-types";

const Students = (props) => {
  useEffect(() => {
    //console.log(props.studentsList)
  }, [props.studentsList]);
  let students = props.studentsList.map((student, index) => (
    <Student
      id={student.student_id}
      name={student.student_name}
      classNumber={student.student_class}
      phoneNumber={student.studeny_phone_number}
      email={student.student_email}
      deleted={() => props.deleted(student.student_id)}
      edited={() =>
        props.edited(
          student.student_id,
          student.student_name,
          student.student_class,
          student.studeny_phone_number,
          student.student_email
        )
      }
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
