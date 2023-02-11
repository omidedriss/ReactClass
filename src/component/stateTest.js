// import { React, useState } from "react";

// const StateTest = () => {
//   const [count, setCount] = useState(0);
//   const [name, setname] = useState("");


//   return (
//     <div>
//       <p>{count} clicked</p>
//     <p>{name}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         click me
//       </button>
//       <br></br>
//       <input value={name} onChange={(e)=>{
//         setname(e.target.value);
//       }}></input>
//     </div>
//   );
// };

// export default StateTest;
import {react, useState} from "react"
const Milad=()=>{
    const[ali,setali]=useState(0) ;
return(
    <div>
        <p>{ali}</p>
        <button  onClick={()=>{setali(ali+1)}}>1123456</button>
    </div>
)
}
export default Milad;