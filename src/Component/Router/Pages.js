import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getMenues } from "./data_menu";
function Pages() {
  let Menues = getMenues();
  console.log("test");
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {Menues.map((menu) => (
          <>
            <NavLink
              to={`/Pages/${menu.number}/3`}
              key={menu.number}
              className={({ isActive }) =>
                isActive ? "link red" : "link blue"
              }
            >
              {menu.name}
            </NavLink>
          </>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Pages;
