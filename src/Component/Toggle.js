import {useState} from "react";
const Button =()=> {
    const [name,setname]=useState("ON");
    const Toggle=()=>{
        if(name=="ON"){
            setname("OFF")
        }
        else if(name=="OFF"){
            setname("ON")
        }
        
    }
return(
<div>
    <button onClick={Toggle}>{name}</button>
</div>
);
}
export default Button;