import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Status from "./TypeScript/Status6";
// import StudentsComponent from "./Component/SampleStudent/UseRefComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
//Set-ExecutionPolicy -ExecutionPolicy Unrestricted
//https://jsbin.com
/////////////////////////////////// without probs

// function Learn1() {
//   return <div>Learn Test 1</div>;
// }

// const Learn2 = () => {
//   return <div>Learn Test 2</div>;
// };

// const Learn3 = () => {
//   return (
//     <div>
//       {/* hello {Math.floor(Math.random()*40)} */}
//       <div>
//         <Learn2 />
//         <p>test learn 3</p>
//       </div>
//     </div>
//   );
// };
///////////////////////////////////

///////////////////// with probs
// function Learn4(props) {
//   return (
//     <div>
//       Learn Test 1 {props.name} {props.age}
//     </div>
//   );
// }
// function FunctionTest() {
//   return <div>Learn Test props value</div>;
// }
// const Learn5 = (props) => {
//   return <div>Learn Test 2 {props.testF()}</div>;
// };

// const Learn6 = (props) => {
//   return <div>{props.children}</div>;
// };

// const Learn7 = (props) => {
//   return (
//     <div>
//       <div>
//         <Learn3>
//           <p>test learn children</p>
//         </Learn3>
//         <Learn2 />
//         <Learn5 testF={FunctionTest} />
//         <p>test learn 4 {props.name}</p>
//       </div>
//     </div>
//   );
// };
/////////////////////


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Status status="loading"  />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
