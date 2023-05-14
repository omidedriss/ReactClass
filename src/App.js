
import React from "react";
import "./App.css";
import { BrowserRouter,useSearchParams } from "react-router-dom";

const App = () => {
   let [searchparam,setsearchparam]= useSearchParams();

    
  return (
    <BrowserRouter>
      <div className="App">
          <div style={{ marginTop: "70px" }}>
  
         <input   onChange={()=>{


         }}/>


        </div>
      </div>
      </BrowserRouter>
   
  );
};

export default App;




