import React, { useState } from "react";
const Debuge = () => {
  const [name, setName] = useState("");
  // type error
  // logic error
  // chrome debuge with source 
  // debug with vs code debuger for chrome
  // search and download extention react developer tools
  //throw new Error('')

  const handleChange = (e) => {
    setName(e.target.value);
  };
 
  return (
   
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />
      </label>
     
     
  );
};
export default FormSampel1;
