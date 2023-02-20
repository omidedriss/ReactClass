import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< Updated upstream
import hello from "./hello";
import Learn_1 from "./Component/Test_1";

// milad function
function Testmilad() {
  return <div>test milad</div>;
}
const Mmilad = () => {
  return <Testmilad />;
};

function Testmilad_props(props) {
  return (
    <div>
      test milad {props.name} {props.pic}
    </div>
  );
}
function Call_1() {
  return <span>call_1</span>;
}
var Cc = (props) => {
  return <div>{props.tst()}</div>;
};
//
=======
import ClassTrainTest from "./Component/ClassComponentTrain";
import Learn from "./Component/TypePropstraining";
import Condition from "./Component/ConditionTrarining";
import StateTestLearn from "./Component/StatePropsTrain";
import {
  Learn1,
  Learn2,
  Learn3,
} from "./Component/FunctiontrainingWithProbs_Multi_export";
import { Alitest, Alitest2 } from "./Component/Alitest";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById("root"));
function Hello(props) {
  return <div>Hello {props.name}</div>;
}

<<<<<<< Updated upstream
const Hello2 = ({ name }) => <div>Hello {name}</div>;
const click = (name) => {
  alert("hi");
};
var omid;
var omidTest;
var Test;
var test2;
// class Hello extends Component{
//   render(){
//      return <div>Hello {this.props.name}</div>
//   }
=======
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
>>>>>>> Stashed changes
// }

var bahar;
var milad;
var zahra;
var morvarid;
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <div>
      ss
      <hello name="omid" age="35" handler={() => click("omid")} />
    </div>
    <Testmilad_props name="alireza" pic="hotspot" />
    <Mmilad />
    <Cc tst={Call_1} />
    <Learn_1 />
=======
    <Alitest name="ffffff" />
    <Alitest2 br="khar ast" />
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
