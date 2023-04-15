import React from "react";
import ReactDOM from "react-dom";
import {
  Link,
  NavLink,
  Routes,
  Route,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Pages from "./Pages";
import Page from "./Page";
import { getMenues } from "./data_menu";
import assert from "html-to-react";
function RouterFiveLearnwithParamRoute() {
  let Menues = getMenues();

  return (
    <div>
      <Routes>
        {Menues.map((item) => (
          <Route path={"/Pages"} key={item.number} element={<Pages />}>
            <Route
              path={":PageId/:type"}
              // :id/:type
              // (/:id)(/:type)
              // v4 // path="/user/manage/:pathParam1?/:pathParam2?"
              key={item.number}
              element={<Page />}
            ></Route>
          </Route>
        ))}
        <Route path="*" element={<>Noting page 401 </>} />
      </Routes>
    </div>
  );
}

export default RouterFiveLearnwithParamRoute;
