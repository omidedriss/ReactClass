import React from 'react'
import { MyButton } from './MyButton'

export const Student = (props) => {

  const ReadStudent = () => {
    alert(props.Id);
  }
  const UpdateStudent = () => {
    alert(props.Id);
  }
  const DeleteStudent = () => {
    props.DelMeth(props.Id);
  }

  return (
    <>
      <div className='row'>
        <div className="col-4" ></div>
        <div className="col-4">
          <div className="card mt-3 ">
            <div className='row p-3 '>
              <form>
                <div className="mb-3">
                  <label htmlFor="FirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="FirstName" defaultValue={props.FirstName} />
                </div>
                <div className="mb-3">
                  <label htmlFor="LastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="LastName" defaultValue={props.LastName} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="Email" defaultValue={props.Email} />
                </div>
                <div className="mb-3">
                  <label htmlFor="PhonNumber" className="form-label">Phon Number</label>
                  <input type="text" className="form-control" id="PhonNumber" defaultValue={props.PhonNumber} />
                </div>
                <MyButton type='r' methodOnClick={ReadStudent} />
                <MyButton type='u' methodOnClick={UpdateStudent} />
                <MyButton type='d' methodOnClick={DeleteStudent} />
              </form>
            </div>
          </div>
        </div>
        <div className="col-4" ></div>
      </div>
    </>

  )
}
