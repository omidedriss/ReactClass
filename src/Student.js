import React from 'react'
import { MyButton } from './MyButton'

export const Student = (props) => {
  return (
    <>
    <div className='row'>
      <div className="col-4" ></div>
      <div className="col-4">
        <div className="card mt-3">
            <div className='row p-3'>
            <form>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="FirstName" value={props.FirstName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="LastName" value={props.LastName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="Email" value={props.Email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="PhonNumber" className="form-label">Phon Number</label>
                    <input type="text" className="form-control" id="PhonNumber" value={props.PhonNumber} />
                </div>
                
                <button type="submit" className="btn btn-danger">delete</button>
                <MyButton v='1'/>
                </form>
            </div>
        </div>
      </div>        
      <div className="col-4" ></div>
    </div>
  </>

  )
}
