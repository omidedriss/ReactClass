import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Hello, Welcome } from "./component/hello";
import StateTestLearn from "./component/statepropstrain";
import List from "./component/List";
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
// class Hello extends Component{
//   render(){
//      return <div>Hello {this.props.name}</div>
//   }
// }

var bahar;
var milad;
var zahra;
var morvarid;
root.render(
  <React.StrictMode>
    <div>
      {/* <Hello name="morvarid" age="35" />
    </div>

    <div>
      <Test lastname="parhizgar" /> */}
      {/* <StateTestLearn/> */}
      <List/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
