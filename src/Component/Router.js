import React from "react";
import {
  Link,
  NavLink,
  Routes,
  Route,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Routerr() {
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
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Login />} />

      

        <Route path="/register" element={<Register />} />
       
      </Routes>
    </div>
  );
}

export default Routerr;