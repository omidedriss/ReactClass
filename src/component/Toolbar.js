import React, { useState } from "react";
import Logo from "./Logo";
import './Toolbar.css';
import MenuItem from "./MenuItem"; 
import MenuItems from "./MenuItems";
const Toolbar=(prop)=>{
    return(<div className="Toolbar">
    <Logo height="80%" />
    <div >
    <MenuItems />
   </div>
        
    </div>
)
    
  
}
export default Toolbar;