import React from "react";
import proptypes from  "prop-types";

const Learnprops = (props) => {
  return (
    <div>
      <p onClick={props.handler}>
        {" "}
        my name is {props.Name} and i am {props.age} years old
      </p>
    </div>
  );
};

export default Learnprops;
Learnprops.prototype= {
  Name: proptypes.string,
  age:  proptypes.number.isRequired,
  handler: proptypes.func,
};

Learnprops.default={
 Name:"test learn",
};
