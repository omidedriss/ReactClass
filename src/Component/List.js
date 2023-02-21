import React from "react";
const List = (props) => {
  const numbers = [1, 1, 3, 4, 5, 6];
  const listItem = numbers.map((x, index) => {
    console.log(index);
    return <li key={index}>{x}</li>;
  });
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
};
export default List;
