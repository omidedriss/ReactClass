import { useState } from "react";
import react from "react";
import { useSearchParams,useLocation } from "react-router-dom";
const App2=()=>{ 

let [searchParams,setSearchParams]=useSearchParams();
return(
<input value={searchParams.get("filter")|| ""} onChange={(Event) => {
            let filter=Event.target.value;
            if(filter)
            setSearchParams({filter});
            else
            setSearchParams({})
          }}>

          </input>
             
          
)
};

export default App2;