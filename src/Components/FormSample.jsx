import * as React from "react";
import { useState } from "react";

export default function FormSample() {
  const [name, SetName] = useState("ali");
  const [family, SetFamily] = useState("dehghani");
  const [hSelect, SetSelect] = useState("1");
  const HandleClick = (e) => {
    e.preventDefault();
    console.log(name + "|" + family + "|" + hSelect);
  };

  const HandleNameChange = (e) => {
    SetName(e.target.value);
    //console.log(e.currentTarget.value);
  };
  const HandleFamilyChange = (e) => {
    var value = e.target.value;
    SetFamily(value);
    //console.log(e.currentTarget.value);
  };
  const HandleSelectChange = (e) => {
    var value = e.target.value;
    SetSelect(value);
    //console.log(e.currentTarget.value);
  };
  return (
    <div>
      <form onSubmit={HandleClick}>
        <input type="text" value={name} onChange={HandleNameChange} />
        <input type="text" value={family} onChange={HandleFamilyChange} />
        <select value={hSelect} onChange={HandleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit">click</button>
      </form>
    </div>
  );
}
