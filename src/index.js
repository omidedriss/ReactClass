import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Hello, Welcome } from "./hello";
import StateTestLearn from "./component/statepropstrain";
import List from "./component/List";
import Learnprops from "./component/propTypesLearning";
import STUDENT from "./component/Student";
import Textboxstyle from "./component/Style";
import Studensts from "./component/Students";
import Students from "./component/Students";
import Toolbar from "./component/Toolbar";
import StudentsComponent from "./component/StudentsComponents1";
import RouterLinkFirst from "./component/RouterLinkFirst";
import { BrowserRouter } from "react-router-dom";
import App2 from "./App2";





const root = ReactDOM.createRoot(document.getElementById("root"));


const Test = (props) => {
  return <div> morvarid {props.lastname}</div>;
};

function Name(props) {
  return (
    <div>
      {props.name}
      {props.lastname}
    </div>
  );
}
const Hello2 = ({ name }) => <div>Hello {name}</div>;
const click = (name) => {
  alert("hi");
};
var omid;
function Learntest1() {
  return <div> learn test1</div>;
}
const Learn2 = () => {
  return <div>learn test2 </div>;
};
const Learn3 = () => {
  return (
    <div>
      <Learn2 />
      <p>learn test3</p>
    </div>
  );
};
// class Hello extends Component{
//   render(){
//      return <div>Hello {this.props.name}</div>
//   }
// }
function Learn4(props) {
  return <div>learn test4 {props.name}</div>;
}
function Learn5() {
  return <div>learn test5</div>;
}
function Learn6(props) {
  return <div>learn test6 {props.func()} </div>;
}
function Learn7(props) {
  return <div>learn test7 {props.children}</div>;
}

const Learn8 = (props) => {
  return (
    <div>
      <Learn2 />
      <Learn3>
        <p> Welcome </p>
      </Learn3>
      <Learn6 func={Learn5} />
    </div>
  );
};
//////////////////////////////////////////
root.render(
  <React.StrictMode>
    <div>
     
      {/* <Hello name="morvarid" age="35" /> */}
            {/* <StudentsComponent /> */}
    <BrowserRouter>
      <RouterLinkFirst/>
      <App2></App2>
      </BrowserRouter> 
      {/* <Test lastname="parhizgar" />  */}
      {/* <StateTestLearn/> */}
      {/* <List/> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
