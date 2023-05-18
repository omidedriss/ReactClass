import React from "react";
import { Route, Routes } from "react-router";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function RouterTwoLearnwithRouterSimple() {
  return (
    <div>
       <Home></Home>
      
       <Routes> 
         {/* <Route path="/" element={<Home />}> */}
          <Route path="/contact us" element={<Contact></Contact>}></Route>
          <Route path="/about us" element={<About></About>}></Route>
        {/* </Route> */}
       </Routes> 
    </div>
  );
}
export default RouterTwoLearnwithRouterSimple;
