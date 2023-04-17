import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ClassTrainTest from "./Component/ClassComponentTrain";
import Learn from "./Component/TypePropstraining";
import Condition from "./Component/ConditionTrarining";
import StateTestLearn from "./Component/StatePropsTrain";
import {
  Learn1,
  Learn2,
  Learn3,
} from "./Component/FunctiontrainingWithProbs_Multi_export";
import Event from "./Component/HandelingEvent";
import List from "./Component/List";
import StyleTraining from "./Component/StyleLearn/StyleTraining";
import FormSampel1 from "./Component/FormSample1";
import StopWatcher from "./Component/LifeCycle";
import CheckLifeCycle from "./Component/CheckLifeCycleTest";
import Calculator from "./Component/Proje/Calculator";
import StudentsComponent from "./Component/SampleStudent/StudentsComponents1";
import Toolbar from "./Component/header/Toolbar";
import SideDrawer from "./Component/header/SideDrawer";
import App from "./App";
import RouterLinkFirstLearnWithLocationAndParam from "./Component/Router/RouterLinkFirstLearnWithLocationAndParam";
import RouterTwoLearnwithRouterSimple from "./Component/Router/RouterTwoLearnwithRouterSimple";
import RouterThreeLearnwithNestedRouter from "./Component/Router/RouterThreeLearnwithNestedRouter";
import RouterFourLearnwithListLinkAndShow from "./Component/Router/RouterFourLearnwithListLinkAndShow";
import RouterFiveLearnwithParamRoute from "./Component/Router/RouterFiveLearnwithParamRoute";
import APIFirstCode from "./Component/API/APIFirstCode";
import APITwoCodeWithShowAndLoadingAndChange from "./Component/API/APITwoCodeWithShowAndLoadingAndChange";
import APIThreeWithEditePostDelet from "./Component/API/APIThreeWithEditePostDelet.js";
import APIFourWithErrorLocalAndGlobalHandel from "./Component/API/APIFourWithErrorLocalAndGlobalHandel";
import axios from "axios";
import APIFiveWithSpinerAndGlobalConfig from "./Component/API/APIFiveWithSpinerAndGlobalConfig";
// import StudentsComponent from "./Component/SampleStudent/UseRefComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
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
axios.defaults.baseURL = "https://jsonplaceholder.ir";
axios.defaults.headers.post["Contetnt-Type"] = "application/json";
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIFiveWithSpinerAndGlobalConfig />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
