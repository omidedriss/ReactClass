import React, { useRef, useState } from 'react'
import { MyButton } from './MyButton';
import { Student } from './Student'

export const Students = () => {
  const [studentList, setStudentList] = useState([{ Id: 1, FirstName: 'alireza', LastName: 'tavakol', Email: 'a@a.c', PhonNumber: '1234567890' }
    , { Id: 2, FirstName: 'hasan', LastName: 'bagheri', Email: 'b@b.y', PhonNumber: '0987654321' }]);

  var maxId = 3;
  var addFirstName;
  var addLastName;
  var addEmail;
  var addPhonNumber;
  const inputRefFirstName = useRef(null);
  const inputRefLastName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefPhonNumber = useRef(null);

  const CreateStudent = () => {
    setStudentList(studentList => [...studentList, { Id: maxId, FirstName: addFirstName, LastName: addLastName, Email: addEmail, PhonNumber: addPhonNumber }]);
    maxId = maxId + 1;
    inputRefFirstName.current.value = "";
    inputRefLastName.current.value = "";
    inputRefEmail.current.value = "";
    inputRefPhonNumber.current.value = "";
  }

  const DeleteStudent = (delId) => {
    const newPeople = studentList.filter((s) => s.Id !== delId);
    console.log(newPeople);
    setStudentList(newPeople);
  }


  return (
    <>
      <div className='row'>
        <div className="col-4" ></div>
        <div className="col-4">
          <div className="card mt-3  alert alert-primary">
            <div className='row p-3'>
              <form>
                <div className="mb-3">
                  <label htmlFor="FirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="FirstName" ref={inputRefFirstName} onChange={(event) => { addFirstName = event.target.value; }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="LastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="LastName" ref={inputRefLastName} onChange={(event) => { addLastName = event.target.value; }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="Email" ref={inputRefEmail} onChange={(event) => { addEmail = event.target.value; }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="PhonNumber" className="form-label">Phon Number</label>
                  <input type="text" className="form-control" id="PhonNumber" ref={inputRefPhonNumber} onChange={(event) => { addPhonNumber = event.target.value; }} />
                </div>
                <MyButton type='c' methodOnClick={CreateStudent} />
              </form>
            </div>
          </div>
        </div>
        <div className="col-4" ></div>
      </div>

      {studentList.map((s, i) => (
        <Student key={i} Id={s.Id} FirstName={s.FirstName} LastName={s.LastName} Email={s.Email} PhonNumber={s.PhonNumber} DelMeth={DeleteStudent} />
      ))}
    </>
  )
}
