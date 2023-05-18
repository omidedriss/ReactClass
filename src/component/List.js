import React from "react";

const List = (props) => {
  const number = [1, 1, 2, 3, 4, 5, 6];



  const listItem = number.map((item, index) => {
    console.log(index);
    return <li key={index}>{item}</li>;
  });

  const test2=number.findIndex((x)=>{
     return x >5 ;
});
  return(
  <div>
    <ul>{listItem}</ul>
     {test2}
  </div>);
};
export default List;
