import React from 'react'
import { Student } from './Student'

export const Students = (props) => {
    var aaa=props.List.map((s,i) => {
      return  <Student key={i}
       FirstName={s.FirstName}
       LastName={s.LastName}
       Email={s.Email}
       PhonNumber={s.PhonNumber}/>
    });  
       
  return (aaa)
}
