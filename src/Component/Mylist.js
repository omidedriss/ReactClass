import { string } from "prop-types";
import React,{useState} from "react";

const MyList = (props) => {
  const names = ["hooman","mohsen", "alireza"];
//   let test=[];
//   const [count, setCount] = useState([]);

  const listItem = names.map((x,index) => {
    console.log(index);
    return <li key={index} >{x}</li>;
  });
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
};
export default MyList;
