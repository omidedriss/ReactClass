import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
function Hello(props) {
  return <div>Hello {props.name}</div>;
}

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
// }

var bahar;
var milad;
var zahra;
var morvarid;
root.render(
  <React.StrictMode>
    <div>
      ss
      <hello name="omid" age="35" handler={() => click("omid")} />
    </div>
    <Testmilad_props name="alireza" pic="hotspot" />
    <Mmilad />
    <Cc tst={Call_1} />
    <Learn_1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
