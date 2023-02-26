import React, { useState , useEffect} from "react";

const Mylist = (props) => {
  const strings = ["react", "react1", "react2", "react3"];

  const [isToggleOn, setisToggleOn] = useState("ON");

  const [inputtext, setinputtext] = useState("");
  const [myselect, setmyselect] = useState();
  const [stop2, setstop2] = useState(0);
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

  const HandleClick = () => {
      setisToggleOn(!isToggleOn);
  };

  const listitem = strings.map((x, index) => {
    return (
      <a href="#">
        {" "}
        <li key={index}>{x}</li>
      </a>
    );
  });

const stop1=()=>{
    setstop2(stop2+1);
}

useEffect(()=>{
    let id=setInterval(stop1,1000) 
        return()=>{
            clearInterval(id);
        }
    }


)
  return (
    <div>
      {/* <ul>{listitem}</ul> */}

      {/* <button onClick={HandleClick}>{isToggleOn ? "ON" : "off"}</button> */}
      {/* <form onSubmit={Mysubmit}>
        <input value={inputtext} onChange={handlechange}></input>
        <br></br>
        <select value={myselect} onChange={handleselectchange}>
          <option value={"test1"}>test1</option>
          <option value={"test2"}>test2</option>
          <option value={"test3"}>test3</option>
        </select>

        <button type="submit"> OK </button>
      </form> */}
{stop2}

    </div>
  );
};
export default Mylist;
