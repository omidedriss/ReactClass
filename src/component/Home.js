import React from "react";
import { NavLink , Outlet} from "react-router-dom";
 function Home(){
    return(
    <div>
    
        <div> wellcome </div>
    <nav style={{
        borderBottom:"solid pink 1px",
        paddingBottom: "1rem",
        flexDirection:"column",
                       
        }}>
            <NavLink to="/">home |</NavLink>
            <NavLink to="/about us"> about |</NavLink>
            <NavLink to="/contact us"> contact|</NavLink>

        </nav>
         {/* <Outlet></Outlet> */}
    </div>
    );
 }

 export default Home;