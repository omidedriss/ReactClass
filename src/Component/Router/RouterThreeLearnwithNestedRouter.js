import React from "react";
import {
  Link,
  NavLink,
  Routes,
  Route,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function RouterThreeLearnwithNestedRouter() {
  //get params url
  let [searchParams, setSearchParams] = useSearchParams();
  let Location = useLocation();
  let test = searchParams.get("test");
  //sample http://localhost:3000/?test=1
  console.log(test);
  //sample http://localhost:3000/about
  console.log(Location.pathname);
  //sample http://localhost:3000/about?test=2
  console.log(Location.search);
  //sample http://localhost:3000/about?test=2#test2
  console.log(Location.hash);
  return (
    <div>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default RouterThreeLearnwithNestedRouter;
