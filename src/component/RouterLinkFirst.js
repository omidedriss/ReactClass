import React, { useState } from "react";
import {
  useSearchParams,
  useLocation,
  NavLink,
  Link,
  BrowserRouter,
} from "react-router-dom";
function RouterLinkFirstLearnWithLocationAndParam() {
  let location = useLocation();
  let [test2, settest2] = useState("test2");
  let [searchParams, setSearchParams] = useSearchParams();
  let test = searchParams.get("test");
  let sort = searchParams.get("sort");

  console.log(location);
  console.log(location.pathname);
  console.log(location.search);
  console.log(location.hash);

  return (
    <div>
      <div> hello world</div>
      <nav
        style={{
          borderBottom: "solid red 1px",
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <Link to="/Home"> Home |</Link>
        <Link
          to={{
            pathname: "/about",
            search: "?sort=name&test=2",
            hash: "#the-hash",
          }}
        >
          {""} About |
        </Link>
        <button
          onClick={(p) => {
            setSearchParams(`filter=${test2}`);
          }}
        >
          change params
        </button>
      </nav>
    </div>
  );
}

export default RouterLinkFirstLearnWithLocationAndParam;
