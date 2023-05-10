import React from "react";
let menues = [
  {
    name: "home",
    number: 1,
    description: <h2>Home description</h2>,
  },
  {
    name: "About",
    number: 2,
    description: <h2>About </h2>,
  },
  {
    name: "Contact",
    number: 3,
    description: <h2>Contact </h2>,
  },
];
export function Getmenues(){
return menues;
};
 export function Getmenue(number){
    return(
        menues.find((menu)=>menu.number===number)
    );
 };