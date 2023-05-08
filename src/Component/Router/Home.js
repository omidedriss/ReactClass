import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <Outlet />
      <div>Hello World</div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <NavLink to="/">Home | </NavLink>
        <NavLink to="/about"> About | </NavLink>
        <NavLink to="/contact"> Contact</NavLink>
        {/* <NavLink to="/home">Home | </NavLink>
        <NavLink to="/about"> About</NavLink> */}
      </nav>
    </div>
  );
}

export default Home;
