import React from "react";
import { useState } from "react";
const List=()=>{
     const names=["react","java",".NET"];
     const listitem=names.map((x,index)=>{
        console.log(index);
        return <li key={index}>{x}</li>;
     });

     return(
<div>
    <ul>{listitem}</ul>
</div>
     );

};

export default List;