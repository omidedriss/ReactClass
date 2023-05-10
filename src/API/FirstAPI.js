import React, { useState, useEffect } from "react";
import axios from axios;
const API = ()=>{
    
    axios.get("https://github.com/moharnadreza/jsonplaceholder/post").then((response)=>{
        console.log(response.data);
    })
}
export default React.memo(API);