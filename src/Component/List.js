import React, { useState } from "react";
const List = (props) => {
  const numbers = [1, 1, 3, 4, 5, 6];
  let test = [];
  const [count, setCount] = useState([]);

  const Test2 = numbers.find((x) => {
    return x > 3;
  });

  const listItem = numbers.map((item, index) => {
    // console.log(index);
    return <p key={index}>{item}</p>;
  });
  return (
    <div>
      <ul>{listItem}</ul>
      {Test2}
    </div>
  );
};
export default List;
