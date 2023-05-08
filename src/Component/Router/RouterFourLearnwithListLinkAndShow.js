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
import { getMenues } from "./data_menu";
import assert from "html-to-react";
function RouterFourLearnwithListLinkAndShow() {
  let Menues = getMenues();

  return (
    <div>
      {Menues.map((item, index) => (
        <NavLink
          to={`/Pages/${item.name}`}
          key={index}
          className={({ isActive }) => (isActive ? "link red" : "link blue")}
        >
          {item.name}
        </NavLink>
      ))}
      <Routes>
        {Menues.map((item) => (
          <Route
            path={`/Pages/${item.name}`}
            key={item.number}
            element={<>{item.description}</>}
          ></Route>
        ))}
        <Route path="*" element={<>Noting page 401 </>} />
      </Routes>
    </div>
  );
}

export default RouterFourLearnwithListLinkAndShow;
