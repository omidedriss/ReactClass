import { useState } from "react";
const Form=()=>{
    const [name,setname]=useState("");

    return(
        <form
        onSubmit={}>
<label>
    name:
    <input onChange={}></input>
    </label>            
        </form>
    )
}
export default Form;