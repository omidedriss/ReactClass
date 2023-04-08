import React, { useState, useEffect, useRef } from "react";
import Students from "../Component/SampleStudent/students";
import Button from "../Component/SampleStudent/ButtonApp";
const HomePage = (props) => {
  const inputEl = useRef(null);
  const [searchBarValue, setSearchBarValue] = useState("");
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
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudents(itemData);
    setSearchBarValue(event.target.value);
  };
  useEffect(() => {
    setArrayHolder(studentsState);
    inputEl.current.focus();
    console.log(props);
  }, []);
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
    setStudents(students);
  };
  const toggleHandler = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  const edited = (id) => {
    //console.log(props);
    //props.history.push({pathname:'/student/'+id});
    props.history.push("/student/" + id);
  };
  return (
    <div>
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
        className="search-bar"
        ref={inputEl}
        style={{ marginTop: "70px" }}
      />
      <Button btnType="success" clicked={toggleHandler}>
        تغییر وضعیت نمایش
      </Button>
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        deleted={deleteStudent}
        toggle={toggle}
        edited={edited}
      />
    </div>
  );
};
export default HomePage;
