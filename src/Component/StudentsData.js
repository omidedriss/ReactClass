import React, { useState , useEffect} from "react";
import Button from "./ButtonApp";
import Student from "./StudentComponent";
import Students from './StudentsList';
import Toolbar from "../Component/header/Toolbar"

const StudentsData = () => {
  const [Search, setSearch] = useState();
  const [Toggle, setToggle] = useState(false);

  // const inputEl = useRef(null);

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
  const [arrayHolder, setArrayHolder] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  
  // const ecexuteScroll = () => {
  //   window.scrollTo(0, inputEl.current.offsetTop);
  // };
  
  useEffect(() => {
    setArrayHolder(studentsState);
    
  }, []);

  const searchFilterFunction = (e) => {
    const itemData = arrayHolder.filter((item) => {
    const itemData = item.name.toUpperCase();
    const textData = e.target.value.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  setStudents(itemData);
  setSearchBarValue(e.target.value);
};


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

       {/* <input onChange={find} value={Search} ref={inputEl}/> */}

       <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
      />
      
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

      {/* <Button btnType="danger" clicked={ecexuteScroll}>
        click to scroll
      </Button> */}
    </div>
  );
};

export default StudentsData;