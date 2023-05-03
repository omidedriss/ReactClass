import React, { useState } from "react";
import {
  Link,
  NavLink,
  useSearchParams,
  useLocation,
} from "react-router-dom";
function RouterLinkFirstLearnWithLocationAndParam() {
  //get params url
  let [searchParams, setSearchParams] = useSearchParams();
 

  let Location = useLocation();
  let test = searchParams.get("test");
  let sort = searchParams.get("sort");
 
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
    
        <Link to="/home">Home | </Link>

        
    </div>
  );
}

export default RouterLinkFirstLearnWithLocationAndParam;
