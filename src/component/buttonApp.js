import React,{useState} from 'react';
import './btnclass.css';

const ButtonApp=(props)=>{

    const[btnclass,setbtnclass]=useState("Danger");

    // if(props.btnType=="add")
    // {
    //       setbtnclass("Success");
    // }
    // else  if(props.btnType=="delete")
    // {
    //       setbtnclass("Danger");
    // }    
          
           
      return(
        <button  type='button' className={btnclass} onClick={props.delete}>{props.text}</button>
    );
    
   
};

export default ButtonApp