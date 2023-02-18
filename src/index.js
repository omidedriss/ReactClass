import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ClassTrainTest from "./Component/ClassComponentTrain";
import Learn from "./Component/TypePropstraining";
import Condition from "./Component/ConditionTrarining";
import StateTestLearn from "./Component/StatePropsTrain";
import {
  Learn1,
  Learn2,
  Learn3,
} from "./Component/FunctiontrainingWithProbs_Multi_export";

import StyleTraining from "./Component/StyleLearn/StyleTraining";
import Test12 from "./Component/Milad";
const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////////////////////////// without probs
// function Milad(){
// return<div>milad majidi</div>
// }
// function milad() {
//   return <div>Learn Test 1</div>; //بدون ورودی
// }
// const Amir = () => {
//   return <div> amir ALI</div>;
// };

// const milad1 = () => {
//   return <div>Learn Test 2</div>; //arow function 
// };

// const Learn3 = () => {
//   return (
//     <div>
//       <div>
//         <Learn2 /> 
//         <p>test learn 3</p>
//       </div>
//     </div>
//   ); //تو در تو
// };
// ///////////////////////////////////

///////////////////// with probs
// function FunctionTest(){
//   return<div>123456789</div>;
// }
// const Milad =(props) =>{
//   return <div>milad ali mohamd {props.amir()}</div>
// }

// function Learn4(props) {
//   return (
//     <div>
//       Learn Test 1 {props.name} {props.age}
//     </div>
//   );
//  }
// function FunctionTest() {
//   return <div>Learn Test props value</div>;
// }
// const Learn5 = (props) => {
//   return <div>Learn Test 2 {props.testF()}</div>;
// };

// const ALI = (props) => {
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
    <div>
  <Condition milad12={false}/>


    </div>
  </React.StrictMode>
);
reportWebVitals();
