import React, { useState } from "react";
import "./Toolbar.css";
// import LLogo from "../../assets/imaages/logo.png"
import MenuItems from "./MenuItems"

const Toolbar=(props) => {
    return(
        <div className="Toolbar">
            {/* <LLogo height="80%" /> */}
            <MenuItems />

        </div>
    );
}

export default Toolbar;
