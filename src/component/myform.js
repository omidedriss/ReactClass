import React, { useState} from "react";
const Myform=()=>{

    const [inputtext, setinputtext] = useState("");
    const [myselect, setmyselect] = useState();
  
    function handlechange(e) {
        setinputtext(e.target.value);
      }
    
      function handleselectchange(e) {
        setmyselect(e.target.value);
      }
    
      function Mysubmit(e) {
        e.preventDefault();
        alert("Hi " + inputtext + "  " + myselect);
      }

      return (
        <div>
          
           <form onSubmit={Mysubmit}>
            <input value={inputtext} onChange={handlechange}></input>
            <br></br>
            <select value={myselect} onChange={handleselectchange}>
              <option value={"test1"}>test1</option>
              <option value={"test2"}>test2</option>
              <option value={"test3"}>test3</option>
            </select>
    
            <button type="submit"> OK </button>
          </form>  
     
    
        </div>
      );

}
export default Myform;