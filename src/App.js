import React from "react";
//import "./App.css";
import { BrowserRouter, useSearchParams } from "react-router-dom";
import Login from "./Component/Login";

const App = () => {
  let [searchparam, setsearchparam] = useSearchParams();

  return (
   <Login/>
  );
};

export default App;
