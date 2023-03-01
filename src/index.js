import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import hello from "./hello";
import TypePropsTraining from "./Components/TypePropsTraining";
import Learn from "./Components/TypePropsTraining";
import Calculator from "./Components/Calculator";
import StopWatcher from "./Components/LifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function Hello(props){
//   return <div>Hello {props.name}</div>
// }

// const Hello2= ({name}) => <div>Hello {name}</div>
const click = (name) => {
  alert("hi");
};
var omid;
// class Hello extends Component{
//   render(){
//      return <div>Hello {this.props.name}</div>
//   }
// }

root.render(
  <React.StrictMode>
    <div>
      <StopWatcher />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
