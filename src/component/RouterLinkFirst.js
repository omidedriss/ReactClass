import React, { useState } from "react";
import {
  Link,
  NavLink,
  BrowserRouter,
  useSearchParams,
  useLocation,
} from "react-router-dom";
function RouterLinkFirstLearnWithLocationAndParam() {
  //get params url
  let [searchParams, setSearchParams] = useSearchParams();
  let [test2, settest2] = useState("test2");

  let Location = useLocation();
  let test = searchParams.get("test");
  let sort = searchParams.get("sort");
  let test3 = searchParams.get("test2");
  //sample http://localhost:3000/?test=1
  console.log(test);
  console.log(sort);
  console.log(Location);
  console.log(Location.state);
  //sample http://localhost:3000/about
  console.log(Location.pathname);
  //sample http://localhost:3000/about?test=2
  console.log(Location.search);
  //sample http://localhost:3000/about?test=2#test2
  console.log(Location.hash);
  return (
    <div>
      <div>Hello World</div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <Link to="/home">Home | </Link>
        <Link
          to={{
            pathname: "/about",
            search: "?sort=name&test=2",
            hash: "#the-hash",
          }}
          state={{ fromDashboard: true }}
        >
          {" "}
          About
          {" | "}
        </Link>
        <button
          onClick={(p) => {
            setSearchParams(`filter=${test2}`);
          }}
        >
          Change Param
        </button>
        {/* <NavLink to="/home">Home | </NavLink>
        <NavLink to="/about"> About</NavLink> */}
      </nav>
    </div>
  );
}

export default RouterLinkFirstLearnWithLocationAndParam;